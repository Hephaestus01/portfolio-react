import React, { useState } from "react";
import Projects from "./Projects";
import project1 from '../assets/images/projects/project-1.png'
import project2 from '../assets/images/projects/project-2.png'
import project3 from '../assets/images/projects/project-3.png'

export default function Porfolio() {
  const [projects] = useState([
    {
      id: 1,
      name: "Cocktaily Daily",
      repo: "https://github.com/slorreina369/cocktail-day",
      deploy: "https://slorreina369.github.io/cocktail-day/",
      image: project1,
    },
    {
      id: 2,
      name: "Fitwit",
      repo: "https://github.com/Jamsniffer/fit-wit",
      deploy: "https://frozen-citadel-35341.herokuapp.com/",
      image: project2,
    },
    {
      id: 3,
      name: "Genu",
      repo: "https://github.com/Hephaestus01/codetrip-project-3",
      deploy: "https://codetrip-33a81.firebaseapp.com/",
      image: project3,
    },
  ]);

  const [currentProjects, setProjects] = useState(projects);

  // for contact modal, if adding later
  // const [contactSelected, setContactSelected] = useState(false);

  const [currentIndex, setIndex] = useState(0);
  const length = projects.length

  const nextSlide = () => {
    setIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  }
  const prevSlide = () => {
    setIndex(currentIndex === 0 ? length - 1 : currentIndex -1)
  }

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="portfolio-section">
      <button type="button" id="last-arrow" onClick={prevSlide}>
        &lt;&lt;&lt;
      </button>
      <div className="project-card">
        {currentProjects.map((project, projectIndex) => {
          return (
            <>
              <div
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                className={
                  projectIndex === currentIndex ? "active slide" : "slide"
                }
                key={projectIndex}
              >
                {projectIndex === currentIndex && (
                  <Projects
                    key={project.id}
                    {...project}
                    currentProjects={currentProjects}
                    projectIndex={projectIndex}
                    index={currentIndex}
                  />
                )}
              </div>
            </>
          );
        })}
      </div>
      <button type="button" id="next-arrow" onClick={nextSlide}>
        &gt;&gt;&gt;
      </button>
    </section>
  );
}
