import React from "react";
import usePageTitle from "../hooks/usePageTitle";

export default function Home() {
  usePageTitle("Home | Katherine Breed");

  return (
    <div className="page py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-10 mx-auto text-center text-md-start">
            <h1 className="display-6 display-md-5 fw-light mb-3">
              Frontend Developer crafting elegant React interfaces
            </h1>
            <p className="lead mb-4 text-muted">
              React · Vite · Bootstrap — clean, fast, responsive builds
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a
                href="https://www.fiverr.com/katherine_breed/create-a-landing-page-or-3-to-5-page-base-frontend-website#"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-hero"
              >
                Hire via Fiverr
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
