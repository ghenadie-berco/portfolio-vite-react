// import { useState } from "react";
import { useEffect } from "react";
import About from "./components/About/About";
import "./App.css";
import TechSkills from "./components/Tech-Skills/Tech-Skills";

function animate(): void {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      switch (entry.target.id) {
        case "about":
          entry.target.classList.toggle("fade-in", entry.isIntersecting);
          break;
        default:
          // console.log("about detected")
          entry.target.classList.toggle("show", entry.isIntersecting);
          break;
      }
    });
  });
  const elements = document.querySelectorAll(".section");
  elements.forEach((e) => observer.observe(e));
}

function App() {
  useEffect(() => animate());

  return (
    <div className="view flex-col">
      <div id="about" className="section about">
        <About />
      </div>
      {/* <div className="section hidden projects">Projects</div> */}
      <div className="section hidden tech-skills">
        <TechSkills />
      </div>
      {/* <div className="section hidden contact">Contact</div> */}
    </div>
  );
}

export default App;
