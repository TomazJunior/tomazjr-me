import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const validated = contactSchema.parse(data);

    // Check if email is configured
    const { RESEND_API_KEY, RESEND_FROM_EMAIL, CONTACT_EMAIL } = process.env;
    if (!RESEND_API_KEY || !RESEND_FROM_EMAIL || !CONTACT_EMAIL) {
      if (process.env.NODE_ENV === "development") {
        console.log("Contact form submission (email not configured):", validated);
      }
      return NextResponse.json({ success: true });
    }

    // Instantiate inside handler to avoid build-time evaluation
    const resend = new Resend(RESEND_API_KEY);

    await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: CONTACT_EMAIL,
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
    if (process.env.NODE_ENV === "development") {
      console.error("Contact form error:", error);
    }

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
