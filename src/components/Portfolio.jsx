import React from "react";

export default function Portfolio() {
  return (
    <section className="section bg-light">
      <h2 className="text-center">Recent Projects</h2>
      <div className="grid">
        <div className="card">
          <img
            src="/images/nzsi_desktop_1.jpg"
            alt="Screenshot of katherinebreed.link website"
            className="portfolio-thumbnail"
          />
          <h5>New Zealand Stringed Instruments</h5>
          <p>
            A custom site built for my Diploma with HTML, CSS, and PHP,
            featuring a CMS and working contact form.
          </p>
          <a
            href="https://katherinebreed.link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View Project
          </a>
        </div>
        <div className="card">
          <img
            src="/images/ecomm_shop_page.jpg"
            alt="Screenshot of katherinebreed.link website"
            className="portfolio-thumbnail"
          />
          <h5>GitHub Portfolio</h5>
          <p>
            Modular frontend projects using React and Vite, hosted on GitHub.
          </p>
          <a
            href="https://github.com/KatBreed"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Visit GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
