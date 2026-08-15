import { NextResponse } from "next/server";
import { sendEmailViaSMTP } from "@/lib/smtp";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.warn("SMTP credentials are not configured in environment variables.");
      // Fail gracefully or handle locally
      return NextResponse.json(
        { error: "Mail server is not configured. Please set SMTP_USER and SMTP_PASS." },
        { status: 500 }
      );
    }

    const emailBody = [
      `You received a new message from your portfolio contact form:`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Message:`,
      `${message}`,
    ].join("\n");

    await sendEmailViaSMTP(
      {
        from: smtpUser, // Gmail requires authenticated user as sender
        to: smtpUser, // Send to himself
        subject: `New Portfolio Message from ${name}`,
        text: emailBody,
      },
      {
        user: smtpUser,
        pass: smtpPass,
      }
    );

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email." },
      { status: 500 }
    );
  }
}
