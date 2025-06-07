import React from "react";
import usePageTitle from "../hooks/usePageTitle";

export default function About() {
  usePageTitle("About | Katherine Breed");

  return (
    <div className="page py-5 container">
      <h2 className="mb-4">About Me</h2>

      <div className="about-content mb-4 justify-content-center">
        <img
          src="/images/ski-selfie.jpg"
          alt="Katherine in ski gear skiing in Mt Hutt"
          className="img-fluid about-photo"
        />
      </div>

      <p className="text-muted fs-5">
        I'm a frontend developer based in New Zealand, passionate about intuitive design, speed optimization, and accessibility.
      </p>
    </div>
  );
}
