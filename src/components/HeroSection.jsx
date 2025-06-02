import React from "react";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <h1 className="hero-title">Katherine Breed</h1>
      <p className="hero-subtitle">Frontend Developer | React · Vite · Bootstrap</p>
      <a href="https://www.fiverr.com/katherine_breed/create-a-landing-page-or-3-to-5-page-base-frontend-website#" target="_blank" rel="noopener noreferrer" className="btn btn-hero">
        Hire via Fiverr
      </a>
      <div className="scroll-indicator mt-3">
        <small>Scroll to learn more ↓</small>
      </div>
    </section>
  );
}