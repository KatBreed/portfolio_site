import React from "react";

export default function App() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section min-vh-100 d-flex flex-column justify-content-center align-items-center text-center px-4">
        <h1 className="display-3 fw-bold mb-2">Katherine Breed</h1>
        <p className="lead mb-4 fs-4">Frontend Developer — React • Vite • Bootstrap</p>
        <a
          href="https://www.fiverr.com/katbreed"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg rounded-pill shadow-sm px-4 hover-effect"
        >
          Hire Me on Fiverr
        </a>
        {/* Scroll Down Indicator */}
        <div className="scroll-indicator mt-3">
          <p className="fs-6">Scroll down to explore ↓</p>
        </div>
      </section>

      {/* Services */}
      <section className="container py-5">
        <h2 className="h2 fw-bold mb-3">What I Offer</h2>
        <p className="mb-4 fs-5">
          I create clean, modern, and responsive brochure websites using React and Vite — ideal for portfolios, small businesses, and creatives.
        </p>
        <ul className="list-unstyled fs-5">
          <li>✅ Mobile-friendly layout with Bootstrap</li>
          <li>✅ Built with React + Vite for blazing-fast performance</li>
          <li>✅ Integration of media and social media links</li>
          <li>✅ Optional contact form available</li>
          <li>✅ Deployed on free hosting using Netlify, Vercel, Cloudflare Pages, or GitHub Pages (also open to discuss your preferred host)</li>
          <li>✅ Full source code access via GitHub</li>
        </ul>
      </section>

      {/* Portfolio */}
      <section className="bg-section py-5">
        <div className="container">
          <h2 className="h2 fw-bold mb-4 text-center">Portfolio Highlights</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title fs-5 fw-semibold">katherinebreed.link</h3>
                  <p className="card-text fs-6">
                    Designed and built from scratch using HTML, CSS, and PHP, this site demonstrates my eye for layout and minimalist design. It also features a working contact form and CMS integration (SilverStripe). 
                  </p>
                  <a
                    href="https://katherinebreed.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm hover-effect"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title fs-5 fw-semibold">GitHub Work</h3>
                  <p className="card-text fs-6">
                    Projects built with Vite, React, and CSS. Modular and clean.
                  </p>
                  <a
                    href="https://github.com/KatBreed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm hover-effect"
                  >
                    Visit GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="container py-5">
        <h2 className="h2 fw-bold mb-3">About Me</h2>
        <p className="fs-5">
          I'm a frontend developer based in New Zealand with a passion for clean UI, fast performance, and modern tech stacks. My work is rooted in simplicity, clarity, and accessibility.
        </p>
      </section>

      {/* Contact CTA */}
      <section className="text-center bg-primary text-white py-5">
        <div className="container">
          <h2 className="h2 fw-bold mb-3">Let’s Build Something</h2>
          <p className="mb-4 fs-5">
            Ready to launch your site or revamp your online presence? I'm available via Fiverr (for now contact me through Fiverr).
          </p>
          <a
            href="https://www.fiverr.com/katbreed"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light btn-lg rounded-pill shadow-sm px-4 hover-effect"
          >
            Hire Me on Fiverr
          </a>
        </div>
      </section>
    </div>
  );
}
