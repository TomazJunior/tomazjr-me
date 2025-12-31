import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const validated = contactSchema.parse(data);

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.log("Contact form submission (no email configured):", validated);
      return NextResponse.json({ success: true });
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "delivered@resend.dev",
      subject: `Portfolio Contact: ${validated.name}`,
      text: `
Name: ${validated.name}
Email: ${validated.email}

Message:
${validated.message}
      `,
      replyTo: validated.email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
