import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        error: "All fields are required.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Sebastian Portfolio <onboarding@resend.dev>",
      to: ["akermans2@gmail.com"],
      replyTo: email,
      subject: `Portfolio: ${subject}`,
      text: `
New message from your portfolio

Name: ${name}
Email: ${email}

Subject: ${subject}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        error: "Could not send message.",
      });
    }

    console.log("Email sent:", data);

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("Server error:", error);

    return res.status(500).json({
      error: "Something went wrong.",
    });
  }
});

app.listen(3001, () => {
  console.log("Contact server running on http://localhost:3001");
});