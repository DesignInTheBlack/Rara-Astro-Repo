import { Resend } from "resend";

export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    try {
      const formData = await request.formData();
      const message = formData.get("message");

      if (!message) {
        return new Response(
          JSON.stringify({ success: false, error: "The 'message' field is required." }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      const resend = new Resend(env.RESEND_API_KEY);

      const { data, error } = await resend.emails.send({
        from: env.SEND_EMAIL_FROM,
        to: "creative@raraavis.design",
        subject: "ATTENTION: New Client Lead Submitted",
        html: `<div>${message} has requested a consultation.</div>`,
      });

      if (error) {
        console.error("Resend API Error:", error);
        return new Response(
          JSON.stringify({ success: false, error: error.message }),
          { status: 500, headers: { "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ success: true, data }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } catch (err) {
      console.error("Worker Error:", err);
      return new Response(
        JSON.stringify({ success: false, error: "Failed to send email." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  },
};