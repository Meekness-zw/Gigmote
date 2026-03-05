import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const fromEmail = process.env.SMTP_FROM_EMAIL || smtpUser;
const toEmail = process.env.CONTACT_TO_EMAIL || "zen@energyss.io";

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpPort === 465,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = (formData.get("name") ?? "").toString();
    const email = (formData.get("email") ?? "").toString();
    const specialty = (formData.get("specialty") ?? "").toString();
    const cvLink = (formData.get("cv_link") ?? "").toString();
    const cvFile = formData.get("cv_file") as File | null;
    const profileSummary = (formData.get("profile_summary") ?? "").toString();

    if (!name || !email || !specialty || (!cvLink && !cvFile)) {
      return NextResponse.json(
        { error: "Name, email, specialty, and at least a CV link or file are required." },
        { status: 400 }
      );
    }

    const attachments = [] as { filename: string; content: Buffer }[];

    if (cvFile) {
      const arrayBuffer = await cvFile.arrayBuffer();
      attachments.push({
        filename: cvFile.name || "cv.pdf",
        content: Buffer.from(arrayBuffer),
      });
    }

    const lines = [
      `<h2>New talent application</h2>`,
      `<p><strong>Name:</strong> ${name}</p>`,
      `<p><strong>Email:</strong> ${email}</p>`,
      `<p><strong>Primary expertise:</strong> ${specialty}</p>`,
    ];

    if (profileSummary) {
      lines.push(
        `<p><strong>How they like to work / what they’re looking for:</strong><br />${profileSummary
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean)
          .join("<br />")}</p>`
      );
    }

    if (cvLink) {
      lines.push(
        `<p><strong>CV / Portfolio Link:</strong> <a href="${cvLink}">${cvLink}</a></p>`
      );
    }

    if (cvFile) {
      lines.push(`<p><strong>CV File:</strong> Attached to this email.</p>`);
    }

    await transporter.sendMail({
      from: `"Gigmote Careers" <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New talent application: ${name}`,
      html: lines.join("\n"),
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[join-gigmote] Failed to send email", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again later." },
      { status: 500 }
    );
  }
}

