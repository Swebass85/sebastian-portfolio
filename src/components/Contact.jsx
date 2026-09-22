import { useState } from "react";
import "../Styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("sending");

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Could not send message.");
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <p className="section-label">CONTACT</p>

        <h2>Let's build something together.</h2>

        <p className="contact-intro">
          I'm currently open to internships, collaborations, and development
          opportunities. Feel free to send me a message.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-row">
            <div className="contact-field">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="subject">Subject</label>

            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="What would you like to talk about?"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows="7"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* ACTION BUTTONS */}
          <div className="contact-actions">
            <button
              className="contact-button"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            <a
              href="https://www.linkedin.com/in/sebastian-akerman-a9652963/"
              target="_blank"
              rel="noreferrer"
              className="contact-linkedin"
              aria-label="Sebastian Åkerman on LinkedIn"
              title="LinkedIn"
            >
              <svg
                className="linkedin-svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29zM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.1 20.45H3.54V8.98H7.1v11.47z" />
              </svg>

              <span className="contact-linkedin-shimmer" />
            </a>
          </div>

          {status === "success" && (
            <p className="contact-status success">
              Message sent successfully ✓
            </p>
          )}

          {status === "error" && (
            <p className="contact-status error">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;