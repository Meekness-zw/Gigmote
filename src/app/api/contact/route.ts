import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const fromEmail = process.env.SMTP_FROM_EMAIL || smtpUser;
const toEmail = process.env.CONTACT_TO_EMAIL || "zen@energyss.io";

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
    const { name, email, company, message } = await req.json();

    if (!name || !email || !company || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !fromEmail || !toEmail) {
      return NextResponse.json(
        { error: "Contact form email service is not configured." },
        { status: 500 }
      );
    }

    await transporter.sendMail({
      from: `"Gigmote Website" <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New contact from ${name} (${company})`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company}

Message:
${message}
      `.trim(),
      html: `
        <h2>New contact submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
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

