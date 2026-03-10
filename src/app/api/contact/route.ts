import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const fromEmail = process.env.SMTP_FROM_EMAIL || smtpUser;
const toEmail = process.env.CONTACT_TO_EMAIL || "zen@gigmote.com";

if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !fromEmail || !toEmail) {
  console.warn("[contact] SMTP environment variables are not fully configured.");
}

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
    const {
      fullName,
      email,
      company,
      challenge,
      unlock,
      teamStructure,
      idealPartner,
    } = await req.json();

    console.log("[contact] API received submission", {
      fullName,
      email,
      company,
      unlock,
      teamStructure,
      hasChallenge: !!challenge,
      hasIdealPartner: !!idealPartner,
    });

    const unlockSelections: string[] = Array.isArray(unlock)
      ? unlock
      : typeof unlock === "string" && unlock
      ? [unlock]
      : [];

    if (!fullName || !email || !company || !challenge || !idealPartner) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !fromEmail || !toEmail) {
      return NextResponse.json(
        { error: "Contact form email service is not configured." },
        { status: 500 }
      );
    }

    const unlockText =
      unlockSelections.length > 0 ? unlockSelections.join(", ") : "Not specified";

    const teamStructureText = teamStructure || "Not specified";

    await transporter.sendMail({
      from: `"Gigmote Website" <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New get started enquiry from ${fullName} (${company})`,
      text: `
Name: ${fullName}
Email: ${email}
Company: ${company}

Current challenge:
${challenge}

If solved in 90 days, this would unlock:
${unlockText}

Current team structure:
${teamStructureText}

Ideal support partner:
${idealPartner}
      `.trim(),
      html: `
        <h2>New contact submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Current challenge slowing the business:</strong></p>
        <p>${challenge.replace(/\n/g, "<br />")}</p>
        <p><strong>If solved in 90 days, this would unlock:</strong> ${unlockText}</p>
        <p><strong>Current team structure:</strong> ${teamStructureText}</p>
        <p><strong>Ideal support partner:</strong></p>
        <p>${idealPartner.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] Failed to send email", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

