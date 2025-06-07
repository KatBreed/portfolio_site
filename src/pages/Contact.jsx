import React from "react";
import { FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="section bg-primary text-white text-center">
      <h2>Let’s Collaborate</h2>
      <p>Need a site or redesign? I’m currently available via Fiverr.</p>
      <a
        href="https://www.fiverr.com/katherine_breed/create-a-landing-page-or-3-to-5-page-base-frontend-website#"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-light"
      >
        Hire on Fiverr
      </a>
    </section>
  );
}
