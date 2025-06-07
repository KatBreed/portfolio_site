import React from "react";

export default function Portfolio() {
  return (
    <section className="section bg-light" aria-labelledby="portfolio-heading">
      <h2 id="portfolio-heading" className="text-center mb-4">Recent Projects</h2>
      <div className="grid">
        <article className="card" tabIndex="0">
          <img
            src="/images/nzsi_desktop_1.jpg"
            alt="Screenshot of New Zealand Stringed Instruments website"
            className="portfolio-thumbnail"
          />
          <h3>New Zealand Stringed Instruments</h3>
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
        </article>

        <article className="card" tabIndex="0">
          <img
            src="/images/greenleaf-demo-home-desktop.jpg"
            alt="Screenshot of GreenLeaf Gardens demo website"
            className="portfolio-thumbnail"
          />
          <h3>GreenLeaf Gardens Demo</h3>
          <p>
            A modern, eco-conscious garden design and maintenance demo site built with React and Vite.
          </p>
          <a
            href="https://greenleaf-demo-2ex.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View Demo
          </a>
        </article>

        <article className="card" tabIndex="0">
          <img
            src="/images/ecomm_shop_page.jpg"
            alt="Screenshot of my GitHub portfolio website"
            className="portfolio-thumbnail"
          />
          <h3>GitHub Portfolio</h3>
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
        </article>
        
      </div>
    </section>
  );
}
