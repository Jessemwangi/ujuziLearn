import React from "react";
import HeaderContentAccordion from "./headerContentAccordion";

const LessonListsAccordion = ({ lessons }) => {
  return (
    <div className="accordion-item">
      {lessons &&
        lessons.map((lesson, index) => (
          <HeaderContentAccordion
            key={index}
            id={lesson.id}
            title={lesson.title}
            headers={lesson.headers}
          />
        ))}
{/* 
      <div className="accordion-item">
        <h3 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="true"
            aria-controls="collapseThree"
          >
            Lesson 3.1
            <span className="topics">3 Topics</span>
            <span className="expand">Expand</span>
          </button>
        </h3>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div className="course-lesson">
              <ul>
                <li>Topic 1 – Grounding</li>
                <li>Topic 2 – Igniting</li>
                <li>Topic 3 – Awareness</li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default LessonListsAccordion;
