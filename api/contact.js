import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed.",
    });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: "All fields are required.",
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Please enter a valid email address.",
      });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Sebastian Portfolio <onboarding@resend.dev>",
      to: ["akermans2@gmail.com"],

      // Clicking Reply in Gmail will reply to the person
      // who submitted the contact form
      replyTo: email,

      subject: `Portfolio: ${subject}`,

      text: `
New message from sebastianakerman.se

Name: ${name}
Email: ${email}

Subject:
${subject}

Message:
${message}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        error: "Could not send message.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      success: false,
      error: "Something went wrong.",
    });
  }
}