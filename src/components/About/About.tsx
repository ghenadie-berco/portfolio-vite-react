import { useEffect } from "react";
import "./About.css";

function animate() {
  const titleRef = document.querySelector(".title");
  const imageRef = document.querySelector("#image");
  const descriptionRef = document.querySelector(".description");
  setTimeout(() => {
    titleRef?.classList.add("title-animation-end");
    imageRef?.classList.add("image-animation-end");
    descriptionRef?.classList.add("description-animation-end");
  }, 10);
}

export default function About() {
  useEffect(() => animate());
  return (
    <div className="container">
      <h1 className="title title-animation-start">
        <span>
          Transforming
          <br />
          Concepts into
          <br />
        </span>
        <span className="highlight">
          Seamless
          <br />
          User Experiences
        </span>
      </h1>
      <div id="image" className="image-animation-start profile-image-container">
        <div className="profile-image-border">
          <img
            src="assets/pro-photo-(filter).jpg"
            alt="Ghenadie Berco"
            className="profile-image"
          />
        </div>
      </div>
      <p className="description description-animation-start">
        Hi! I'm Ghenadie, a Frontend Developer based in NYC. I'm passionate
        about crafting the future of web experiences through innovative
        technologies.
      </p>
    </div>
  );
}
