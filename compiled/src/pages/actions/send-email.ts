import type { APIRoute } from "astro";

import { createTransport, type Transporter } from "nodemailer";

type SendEmailOptions = {
  /** Email address of the recipient */
  to: string;
  /** Subject line of the email */
  subject: string;
  /** Message used for the body of the email */
  html: string;
};

export async function sendEmail(options: SendEmailOptions): Promise<Transporter> {
  const transporter = await getEmailTransporter();
  return new Promise(async (resolve, reject) => {
    // Build the email message
    const { to, subject, html } = options;
    const from = import.meta.env.SEND_EMAIL_FROM;
    const message = { to, subject, html, from };
    // Send the email
    transporter.sendMail(message, (err, info) => {
      // Log the error if one occurred
      if (err) {
        console.error(err);
        reject(err);
      }
      // Log the message ID and preview URL if available.
      console.log("Message sent:", info.messageId);
      resolve(info);
    });
  });
}

async function getEmailTransporter(): Promise<Transporter> {
  return new Promise((resolve, reject) => {
    if (!import.meta.env.RESEND_API_KEY) {
      throw new Error("Missing Resend configuration");
    }
    const transporter = createTransport({
      host: "smtp.resend.com",
      secure: true,
      port: 465,
      auth: { user: "resend", pass: import.meta.env.RESEND_API_KEY },
    });
    resolve(transporter);
  });
}

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const to = "creative@raraavis.design";
  const subject = "ATTENTION: New Client Lead Submitted";
  const message = formData.get("message") as string | null;

  if (!to || !subject || !message) {
    throw new Error("Missing required fields");
  }

  try {
    const html = `<div>${message} has requested a consultation.</div>`;
    await sendEmail({ to, subject, html });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email" }),
      { status: 500 }
    );
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};