import React from "react";

export default function About() {
  return (
    <section className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <img src="/images/ski-selfie.jpg" alt="Katherine in Ski Gear sking in Mt Hutt" className="about-photo" />
      </div>
      <p className="text-muted">
        I'm a frontend developer based in New Zealand, passionate about intuitive design, speed optimization, and accessibility.
      </p>
    </section>
  );
}