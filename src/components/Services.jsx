import React from "react";

export default function Services() {
  return (
    <section className="section">
      <h2>Professional Frontend Services</h2>
      <p className="text-muted">
        I specialize in developing responsive, high-performance websites for businesses, portfolios, and creatives.
      </p>
      <div className="card">
        <ul className="services-list">
            <li>Responsive design using Bootstrap</li>
            <li>Lightning-fast builds with React + Vite</li>
            <li>Integrated contact forms & social links</li>
            <li>Hosting on Netlify, Vercel, or GitHub Pages</li>
            <li>Transparent code access via GitHub</li>
        </ul>
      </div>
    </section>
  );
}