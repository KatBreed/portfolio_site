import React from "react";
import usePageTitle from "../hooks/usePageTitle";

export default function Contact() {
  usePageTitle("Contact");

  return (
    <div className="page py-5 container">
      <h2 className="mb-4">Get in Touch</h2>

      <p className="mb-4 text-muted">
        Whether you want to discuss a project or just say hello, feel free to reach out!
      </p>

      <form
        action="https://formspree.io/f/xeokergb" // Replace with your Formspree or other endpoint
        method="POST"
        className="needs-validation"
        noValidate
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
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
            name="email"
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
