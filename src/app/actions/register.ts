"use server";

import { Resend } from "resend";

export async function submitRegistration(formData: FormData) {
    try {
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const specialty = formData.get("specialty") as string;
        const cvFile = formData.get("cv") as File | null;

        if (!name || !email || !specialty || !cvFile) {
            return { success: false, error: "All fields, including a CV, are required." };
        }

        const arrayBuffer = await cvFile.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            console.error("Registration submission failed: missing RESEND_API_KEY environment variable.");
            return {
                success: false,
                error: "Email service is not configured on the server. Please contact the site owner.",
            };
        }

        const resend = new Resend(apiKey);

        const { error } = await resend.emails.send({
            // Use Resend's default verified sender so we don't require gigmote.com domain verification yet
            from: "Gigmote Registration <onboarding@resend.dev>",
            to: "zen@energyss.io",
            subject: `New Gigmote Registration: ${name}`,
            text: `
        A new agent has registered to join Gigmote.
        
        Name: ${name}
        Email: ${email}
        Specialty: ${specialty}
        
        Their CV is attached to this email.
      `,
            attachments: [
                {
                    filename: cvFile.name,
                    content: buffer,
                },
            ],
        });

        if (error) {
            console.error("Registration submission failed:", error);
            return { success: false, error: "Failed to submit registration. Please try again later." };
        }

        return { success: true };
    } catch (error) {
        console.error("Registration submission failed:", error);
        return { success: false, error: "Failed to submit registration. Please try again later." };
    }
}
