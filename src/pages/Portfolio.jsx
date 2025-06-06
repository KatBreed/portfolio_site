import React from "react";

export default function Portfolio() {
  return (
    <div className="page py-5 container" aria-labelledby="portfolio-heading">
      <h2 id="portfolio-heading" className="text-center mb-5">
        Recent Projects
      </h2>

      <div className="row g-4">
        {/* Project 1 */}
        <article className="col-md-4" tabIndex="0">
          <div className="card h-100 shadow-sm">
            <img
              src="/images/nzsi_desktop_1.jpg"
              alt="Screenshot of New Zealand Stringed Instruments website"
              className="card-img-top"
            />
            <div className="card-body d-flex flex-column">
              <h3 className="card-title h5">New Zealand Stringed Instruments</h3>
              <p className="card-text flex-grow-1">
                A custom site built for my Diploma with HTML, CSS, and PHP, featuring a CMS and working contact form.
              </p>
              <a
                href="https://katherinebreed.link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary mt-auto"
              >
                View Project
              </a>
            </div>
          </div>
        </article>

        {/* Project 2 */}
        <article className="col-md-4" tabIndex="0">
          <div className="card h-100 shadow-sm">
            <img
              src="/images/greenleaf-demo-home-desktop.jpg"
              alt="Screenshot of GreenLeaf Gardens demo website"
              className="card-img-top"
            />
            <div className="card-body d-flex flex-column">
              <h3 className="card-title h5">GreenLeaf Gardens Demo</h3>
              <p className="card-text flex-grow-1">
                A modern, eco-conscious garden design and maintenance demo site built with React and Vite.
              </p>
              <a
                href="https://greenleaf-demo-2ex.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary mt-auto"
              >
                View Demo
              </a>
            </div>
          </div>
        </article>

        {/* Project 3 */}
        <article className="col-md-4" tabIndex="0">
          <div className="card h-100 shadow-sm">
            <img
              src="/images/ecomm_shop_page.jpg"
              alt="Screenshot of my GitHub portfolio website"
              className="card-img-top"
            />
            <div className="card-body d-flex flex-column">
              <h3 className="card-title h5">GitHub Portfolio</h3>
              <p className="card-text flex-grow-1">
                Modular frontend projects using React and Vite, hosted on GitHub.
              </p>
              <a
                href="https://github.com/KatBreed"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary mt-auto"
              >
                Visit GitHub
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
