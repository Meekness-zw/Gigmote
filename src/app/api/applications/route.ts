import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";
import { uploadResume } from "@/lib/storage";
import { randomUUID } from "node:crypto";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const fromEmail = process.env.SMTP_FROM_EMAIL || smtpUser;
const defaultTo =
  process.env.APPLICATIONS_TO_EMAIL ||
  process.env.CONTACT_TO_EMAIL ||
  "zen@gigmote.com";

const MAX_FILE_BYTES = 5 * 1024 * 1024; // 5MB

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const jobId = (formData.get("jobId") ?? "").toString().trim();
    const name = (formData.get("name") ?? "").toString().trim();
    const email = (formData.get("email") ?? "").toString().trim();
    const phone = (formData.get("phone") ?? "").toString().trim() || null;
    const coverLetter =
      (formData.get("coverLetter") ?? "").toString().trim() || null;
    const portfolioLink =
      (formData.get("portfolioLink") ?? "").toString().trim() || null;
    const resume = formData.get("resume") as File | null;

    if (!jobId || !name || !email) {
      return NextResponse.json(
        { error: "Name, email, and job are required." },
        { status: 400 }
      );
    }

    if (!resume || resume.size === 0) {
      return NextResponse.json(
        { error: "Please attach your resume." },
        { status: 400 }
      );
    }

    if (resume.size > MAX_FILE_BYTES) {
      return NextResponse.json(
        { error: "Resume file must be smaller than 5MB." },
        { status: 400 }
      );
    }

    const job = await prisma.job.findUnique({ where: { id: jobId } });
    if (!job || job.status !== "published") {
      return NextResponse.json(
        { error: "This role is no longer accepting applications." },
        { status: 404 }
      );
    }

    const applicationId = randomUUID();
    const buffer = Buffer.from(await resume.arrayBuffer());

    // Re-wrap to a File so we can stream to Blob *and* attach to email
    const resumeFile = new File([buffer], resume.name || "resume", {
      type: resume.type || "application/octet-stream",
    });

    let uploaded: Awaited<ReturnType<typeof uploadResume>> | null = null;
    try {
      uploaded = await uploadResume(resumeFile, applicationId);
    } catch (uploadErr) {
      console.error("[applications] resume upload failed", uploadErr);
      return NextResponse.json(
        { error: "Could not upload resume. Please try again." },
        { status: 500 }
      );
    }

    const application = await prisma.application.create({
      data: {
        id: applicationId,
        jobId: job.id,
        name,
        email,
        phone,
        coverLetter,
        portfolioLink,
        resumeName: uploaded.name,
        resumeUrl: uploaded.url,
        resumeSize: uploaded.size,
      },
    });

    // Email admin with attached resume
    if (smtpHost && smtpPort && smtpUser && smtpPass && fromEmail) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: { user: smtpUser, pass: smtpPass },
        });

        const toEmail = job.applyEmail || defaultTo;

        await transporter.sendMail({
          from: `"Gigmote Jobs" <${fromEmail}>`,
          to: toEmail,
          replyTo: email,
          subject: `New application: ${job.title} — ${name}`,
          text: [
            `New application received for ${job.title}`,
            ``,
            `Name: ${name}`,
            `Email: ${email}`,
            phone ? `Phone: ${phone}` : null,
            portfolioLink ? `Portfolio: ${portfolioLink}` : null,
            ``,
            `Resume: ${uploaded.url}`,
            ``,
            `Cover Letter:`,
            coverLetter || "(none)",
            ``,
            `Review in admin panel: ${
              process.env.AUTH_URL || ""
            }/admin/applications`,
          ]
            .filter(Boolean)
            .join("\n"),
          attachments: [
            {
              filename: uploaded.name,
              content: buffer,
            },
          ],
        });
      } catch (mailErr) {
        console.error("[applications] email send failed", mailErr);
        // Don't fail the request — application + resume are already saved.
      }
    } else {
      console.warn("[applications] SMTP not configured — skipping admin email");
    }

    return NextResponse.json({ ok: true, id: application.id });
  } catch (err) {
    console.error("[applications] submission failed", err);
    return NextResponse.json(
      { error: "Could not submit application. Please try again." },
      { status: 500 }
    );
  }
}
