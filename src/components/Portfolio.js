import React, { useState } from "react";
import Projects from "./Projects";

export default function Porfolio() {
  const [projects] = useState([
    {
      id: 1,
      name: "Project 1",
      type: "Type",
      description: "Description 1",
    },
    {
      id: 2,
      name: "Project 2",
      type: "Type",
      description: "Description 2",
    },
    {
      id: 3,
      name: "Project 3",
      type: "Type",
      description: "Description 3",
    },
    {
      id: 4,
      name: "Project 4",
      type: "Type",
      description: "Description 4",
    },
    {
      id: 5,
      name: "Project 5",
      type: "Type",
      description: "Description 5",
    },
    {
      id: 6,
      name: "Project 6",
      type: "Type",
      description: "Description 6",
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
    <section className="">
      <h1 id="about">Portfolio</h1>
      <div className="project-card">
        <div>
          <button
            type="button"
            id="last-arrow"
            onClick={prevSlide}
          >
            &lt;&lt;&lt;
          </button>

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

          <button
            type="button"
            id="next-arrow"
            onClick={nextSlide}
          >
            &gt;&gt;&gt;
          </button>
        </div>
      </div>
    </section>
  );
}
