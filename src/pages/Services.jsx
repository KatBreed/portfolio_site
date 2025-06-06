import React from "react";
import usePageTitle from "../hooks/usePageTitle";

export default function Services() {
  usePageTitle("Services | Katherine Breed");

  return (
    <div className="page py-5 container">
      <h2 className="mb-4">Professional Frontend Services</h2>

      <p className="text-muted fs-5 mb-4">
        I specialize in developing responsive, high-performance websites for businesses, portfolios, and creatives.
      </p>

      <div className="card shadow-sm p-4">
        <ul className="list-unstyled mb-0">
          <li className="mb-2">
            <i className="bi bi-check2-circle text-primary me-2"></i>
            Responsive design using Bootstrap
          </li>
          <li className="mb-2">
            <i className="bi bi-check2-circle text-primary me-2"></i>
            Lightning-fast builds with React + Vite
          </li>
          <li className="mb-2">
            <i className="bi bi-check2-circle text-primary me-2"></i>
            Integrated contact forms & social links
          </li>
          <li className="mb-2">
            <i className="bi bi-check2-circle text-primary me-2"></i>
            Hosting on Netlify, Vercel, GitHub Pages, or Cloudflare Pages
          </li>
          <li>
            <i className="bi bi-check2-circle text-primary me-2"></i>
            Transparent code access via GitHub
          </li>
        </ul>
      </div>
    </div>
  );
}
