import { useEffect } from "react";
import "./Tech-Skills.css";

function scrollAnimations(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    }
  );
  const elements = document.querySelectorAll("li");
  elements.forEach((e) => observer.observe(e));
}

export default function TechSkills() {
  useEffect(() => scrollAnimations(), []);
  return (
    <div className="tech-skills">
      <h1>Tech Skills</h1>
      <ul className="list">
        <li>HTML5</li>
        <li>CSS</li>
        <li>SCSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Angular 20</li>
        <li>React JS</li>
        <li>RxJS</li>
        <li>REST API</li>
        <li>GraphQL</li>
        <li>Accessibility</li>
      </ul>
    </div>
  );
}
