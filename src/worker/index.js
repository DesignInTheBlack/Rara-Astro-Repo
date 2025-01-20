import { Resend } from "resend";

export default {
  async fetch(request, env) {
    // Only allow POST requests
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    try {
      // Parse form data
      const formData = await request.formData();
      const message = formData.get("message");

      // Validate the form input
      if (!message) {
        return new Response(
          JSON.stringify({ success: false, error: "The 'message' field is required." }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      // Validate environment variables (Cloudflare Secrets)
      if (!env.RESEND_API_KEY || !env.SEND_EMAIL_FROM) {
        console.error("Missing required environment variables.");
        return new Response(
          JSON.stringify({
            success: false,
            error: "Server misconfiguration: Missing environment variables.",
          }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      // Initialize Resend with the API key
      const resend = new Resend(env.RESEND_API_KEY);

      // Send the email using Resend
      const { data, error } = await resend.emails.send({
        from: env.SEND_EMAIL_FROM,
        to: "creative@raraavis.design",
        subject: "ATTENTION: New Client Lead Submitted",
        html: `<div>${message} has requested a consultation.</div>`,
      });

      // Handle Resend API errors
      if (error) {
        console.error("Resend API Error:", error);
        return new Response(
          JSON.stringify({ success: false, error: error.message }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      // Return success response
      return new Response(
        JSON.stringify({ success: true, data }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (err) {
      // Catch and log unexpected server errors
      console.error("Worker Error:", err);
      return new Response(
        JSON.stringify({ success: false, error: "Failed to send email." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  },
};
