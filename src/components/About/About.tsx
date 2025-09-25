import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="title">
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
      <div id="image" className="profile-image-container">
        <div className="profile-image-border">
          <img
            src="assets/pro-photo-(filter).jpg"
            alt="Ghenadie Berco"
            className="profile-image"
          />
        </div>
      </div>
      <p className="description">
        Hi! I'm Ghenadie, a Frontend Developer based in NYC. I'm passionate
        about crafting the future of web experiences through innovative
        technologies.
      </p>
    </div>
  );
}
