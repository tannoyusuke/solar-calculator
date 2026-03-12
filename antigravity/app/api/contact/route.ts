import { NextResponse } from "next/server";
import { Resend } from "resend";

// Vercel environment checks
const resendKey = process.env.RESEND_API_KEY;
const resend = resendKey ? new Resend(resendKey) : null;

export async function POST(request: Request) {
    if (!resend) {
        console.error("RESEND_API_KEY is not configured.");
        return NextResponse.json(
            { error: "Server configuration error." },
            { status: 500 }
        );
    }

    try {
        const body = await request.json();
        const { companyName, name, email, role, inquiryType, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "First Name, Email, and Message are required." },
                { status: 400 }
            );
        }

        // Prepare the email HTML content
        const htmlContent = `
      <h2>New Inquiry from Tryfunds.com</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Company:</strong> ${companyName || 'N/A'}</p>
      <p><strong>Role:</strong> ${role || 'N/A'}</p>
      <p><strong>Inquiry Type:</strong> ${inquiryType || 'General Inquiry'}</p>
      <br />
      <h3>Message:</h3>
      <p style="white-space: pre-wrap;">${message}</p>
      <hr />
      <p><small>This email was sent automatically from the corporate website contact form.</small></p>
    `;

        // Send the email using Resend
        const data = await resend.emails.send({
            from: "Tryfunds System <info@contact.tryfunds.com>", // Using the verified domain
            to: ["info@tryfunds.com"], // Mail delivery target
            subject: `[Web Inquiry] ${inquiryType || 'General'} - ${name}`,
            replyTo: email,
            html: htmlContent,
        });

        if (data.error) {
            console.error("Resend API Error:", data.error);
            return NextResponse.json(
                { error: "Failed to send email." },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, id: data.data?.id }, { status: 200 });
    } catch (error) {
        console.error("Contact API Route Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
