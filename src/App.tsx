import { useState } from "react";
import About from "./components/About/About";
import "./App.css";
import Card from "./shared/Card/Card";
import TechSkills from "./components/Tech-Skills/Tech-Skills";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

enum Page {
  ABOUT = "ABOUT",
  TECH_SKILLS = "TECH_SKILLS",
}

function App() {
  const [currentPage, setCurrentPage] = useState(Page.ABOUT);

  const handleNext = () => {
    if (currentPage === Page.ABOUT) {
      setCurrentPage(Page.TECH_SKILLS);
      changePagesVisibility(Page.ABOUT, Page.TECH_SKILLS);
    }
  };

  const handlePrev = () => {
    if (currentPage === Page.TECH_SKILLS) {
      setCurrentPage(Page.ABOUT);
      changePagesVisibility(Page.TECH_SKILLS, Page.ABOUT);
    }
  };

  const changePagesVisibility = (pageToHide: Page, pageToShow: Page) => {
    let elementToHide = null;
    switch (pageToHide) {
      case Page.ABOUT: {
        elementToHide = document.querySelector(".about");
        break;
      }
      case Page.TECH_SKILLS: {
        elementToHide = document.querySelector(".tech-skills");
        break;
      }
    }
    elementToHide!.classList.add("hidden");
    elementToHide!.classList.remove("visible");
    let elementToShow = null;
    switch (pageToShow) {
      case Page.ABOUT: {
        elementToShow = document.querySelector(".about");
        break;
      }
      case Page.TECH_SKILLS: {
        elementToShow = document.querySelector(".tech-skills");
        break;
      }
    }
    elementToShow!.classList.add("visible");
    elementToShow!.classList.remove("hidden");
  };

  return (
    <div className="view flex-col app-container">
      {/* Cards */}
      <div className="flex-row">
        {/* About */}
        <div className="card-container about visible">
          <Card>
            <About />
          </Card>
        </div>

        {/* Tech Skills */}
        <div className="card-container tech-skills hidden">
          <Card>
            <TechSkills />
          </Card>
        </div>
      </div>
      {/* Cards Navigation */}
      <div className="navigation flex-row">
        <button
          className="nav-btn"
          onClick={handlePrev}
          disabled={currentPage === Page.ABOUT}
        >
          <MdNavigateBefore />
        </button>
        <button
          className="nav-btn"
          onClick={handleNext}
          disabled={currentPage === Page.TECH_SKILLS}
        >
          <MdNavigateNext />
        </button>
      </div>
    </div>
  );
}

export default App;
