import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import usePageTitle from "../hooks/usePageTitle";

export default function Contact() {
  usePageTitle("Contact");

  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        () => {
          setSubmitted(true);
          form.current.reset();
        },
        (err) => {
          console.error(err);
          setError("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="page py-5 container">
      <h2 className="mb-4">Get in Touch</h2>

      {submitted && (
        <div className="alert alert-success mb-4">Thanks! Your message has been sent.</div>
      )}

      {error && (
        <div className="alert alert-danger mb-4">{error}</div>
      )}

      <p className="mb-4 text-muted">
        Whether you want to discuss a project or just say hello, feel free to reach out!
      </p>

      <form ref={form} onSubmit={sendEmail} className="needs-validation" noValidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            className="form-control"
            placeholder="Your full name"
            required
          />
          <div className="invalid-feedback">Please enter your name.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            className="form-control"
            placeholder="you@example.com"
            required
          />
          <div className="invalid-feedback">Please enter a valid email address.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message <span className="text-danger">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="form-control"
            placeholder="Write your message here..."
            required
          ></textarea>
          <div className="invalid-feedback">Please enter a message.</div>
        </div>

        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
}
