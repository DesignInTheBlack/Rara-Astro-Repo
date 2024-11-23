export const prerender = false;
import type { APIRoute } from "astro";
import { Resend } from "resend"; // Import Resend library

type SendEmailOptions = {
  /** Email address of the recipient */
  to: string;
  /** Subject line of the email */
  subject: string;
  /** Message used for the body of the email */
  html: string;
};

// Initialize Resend with API key
const resend = new Resend(import.meta.env.RESEND_API_KEY);

// Send email using Resend library
export async function sendEmail(options: SendEmailOptions): Promise<void> {
  const { to, subject, html } = options;

  // Validate environment variables
  const from = import.meta.env.SEND_EMAIL_FROM;
  if (!from) {
    throw new Error("SEND_EMAIL_FROM is missing. Please set it in your environment.");
  }

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
    });

    if (error) {
      console.error("Resend API Error:", error);
      throw new Error(`Failed to send email: ${error.message}`);
    }

    console.log("Email sent successfully:", data);
  } catch (err) {
    console.error("Error in sendEmail function:", err);
    throw err;
  }
}

// API Route
export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const message = formData.get("message") as string | null;

    if (!message) {
      return new Response(
        JSON.stringify({ success: false, error: "The 'message' field is required." }),
        { status: 400 }
      );
    }

    const html = `<div>${message} has requested a consultation.</div>`;

    // Send the email
    await sendEmail({
      to: "creative@raraavis.design",
      subject: "ATTENTION: New Client Lead Submitted",
      html,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email." }),
      { status: 500 }
    );
  }
};
