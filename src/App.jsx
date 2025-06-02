import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import ContactCTA from "./components/ContactSection";
import "./App.css";

export default function App() {
  return (
    <div>
      <HeroSection />
      <Services />
      <Portfolio />
      <About />
      <ContactSection />
    </div>
  );
}