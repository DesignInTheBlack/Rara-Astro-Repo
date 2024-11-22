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
  // Get the form data submitted by the user on the home page
  const formData = await request.formData();
  const to = "creative@raraavis.design";
  const subject = "ATTENTION: New Client Lead Submitted"
  const message = formData.get("message") as string | null;

  // Throw an error if we're missing any of the needed fields.
  if (!to || !subject || !message) {
    throw new Error("Missing required fields");
  }

  // Try to send the email using a `sendEmail` function we'll create next. Throw
  // an error if it fails.
  try {
    const html = `<div>${message} has requested a consultation.</div>`;
    await sendEmail({ to, subject, html });
  } catch (error) {
    throw new Error("Failed to send email");
  }

  // Redirect the user to a success page after the email is sent.
  return new Response(null, { status: 204 }); // 204 No Content
};