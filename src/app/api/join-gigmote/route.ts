import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const fromEmail = process.env.SMTP_FROM_EMAIL || smtpUser;
const toEmail = process.env.CONTACT_TO_EMAIL || "zen@gigmote.com";

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
    const phone = (formData.get("phone") ?? "").toString();
    const jobTitle = (formData.get("job_title") ?? "").toString();
    const coreSkills = (formData.get("core_skills") ?? "").toString();
    const yearsExperience = (formData.get("years_experience") ?? "").toString();
    const areasOfExpertise = (formData.get("areas_of_expertise") ?? "").toString();
    const portfolioLink = (formData.get("portfolio_link") ?? "").toString();
    const githubLink = (formData.get("github_dribbble_link") ?? "").toString();
    const qComplexProject = (formData.get("q_complex_project") ?? "").toString();
    const qLearningNewSkill = (formData.get("q_learning_new_skill") ?? "").toString();
    const qProcessImprovement = (formData.get("q_process_improvement") ?? "").toString();
    const qGlobalTeam = (formData.get("q_global_team") ?? "").toString();
    const qUniqueContribution = (formData.get("q_unique_contribution") ?? "").toString();

    const portfolioFile = formData.get("portfolio_file") as File | null;
    const resumeFile = formData.get("resume_file") as File | null;

    console.log("[join-gigmote] API received submission", {
      name,
      email,
      jobTitle,
      coreSkills,
      yearsExperience,
      hasPortfolioFile: !!portfolioFile,
      hasResumeFile: !!resumeFile,
      hasPortfolioLink: !!portfolioLink,
      hasGithubLink: !!githubLink,
    });

    if (!name || !email || !jobTitle || !coreSkills || !yearsExperience || !areasOfExpertise) {
      return NextResponse.json(
        { error: "Name, email, job title, core skills, years of experience, and areas of expertise are required." },
        { status: 400 }
      );
    }

    if (!portfolioLink && !portfolioFile && !resumeFile) {
      return NextResponse.json(
        { error: "Please provide at least a portfolio link/file or upload your resume." },
        { status: 400 }
      );
    }

    const attachments: { filename: string; content: Buffer }[] = [];

    if (portfolioFile) {
      const arrayBuffer = await portfolioFile.arrayBuffer();
      attachments.push({
        filename: portfolioFile.name || "portfolio.pdf",
        content: Buffer.from(arrayBuffer),
      });
    }

    if (resumeFile) {
      const arrayBuffer = await resumeFile.arrayBuffer();
      attachments.push({
        filename: resumeFile.name || "resume.pdf",
        content: Buffer.from(arrayBuffer),
      });
    }

    const lines = [
      `<h2>New talent application</h2>`,
      `<p><strong>Name:</strong> ${name}</p>`,
      `<p><strong>Email:</strong> ${email}</p>`,
      phone ? `<p><strong>Phone:</strong> ${phone}</p>` : "",
      `<p><strong>Job Title / Desired Role:</strong> ${jobTitle}</p>`,
      `<p><strong>Core Skills:</strong> ${coreSkills}</p>`,
      `<p><strong>Years of Experience:</strong> ${yearsExperience}</p>`,
      `<p><strong>Areas of Expertise / Specializations:</strong> ${areasOfExpertise}</p>`,
    ];

    if (portfolioLink) {
      lines.push(
        `<p><strong>Portfolio / Work Samples Link:</strong> <a href="${portfolioLink}">${portfolioLink}</a></p>`
      );
    }

    if (githubLink) {
      lines.push(
        `<p><strong>GitHub / Dribbble / Online Portfolio:</strong> <a href="${githubLink}">${githubLink}</a></p>`
      );
    }

    const formatMultiline = (value: string) =>
      value
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .join("<br />");

    if (qComplexProject) {
      lines.push(
        `<p><strong>Complex project solved:</strong><br />${formatMultiline(qComplexProject)}</p>`
      );
    }

    if (qLearningNewSkill) {
      lines.push(
        `<p><strong>Approach to learning new skills:</strong><br />${formatMultiline(qLearningNewSkill)}</p>`
      );
    }

    if (qProcessImprovement) {
      lines.push(
        `<p><strong>Process / system improvement:</strong><br />${formatMultiline(qProcessImprovement)}</p>`
      );
    }

    if (qGlobalTeam) {
      lines.push(
        `<p><strong>What excites them about global, performance‑driven teams:</strong><br />${formatMultiline(qGlobalTeam)}</p>`
      );
    }

    if (qUniqueContribution) {
      lines.push(
        `<p><strong>Unique contribution to Gigmote:</strong><br />${formatMultiline(qUniqueContribution)}</p>`
      );
    }

    if (portfolioFile) {
      lines.push(`<p><strong>Portfolio file:</strong> Attached to this email.</p>`);
    }

    if (resumeFile) {
      lines.push(`<p><strong>Resume / CV:</strong> Attached to this email.</p>`);
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

