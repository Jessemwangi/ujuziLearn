import React from "react";
import { server } from "../../../utils/envVariable";

const CourseInstructor = ({ instructors }) => {
  console.log("Instructors data:", instructors); // Debugging line to check data structure
  if (!instructors || instructors.length === 0) {
    return <p>No instructors available for this course.</p>;
  }
  return (
    <div className="course-tab-content">
      {instructors.map(( attrib ) => (
        <div className="course-instructor" key={attrib.id}>
          <div className="thumbnail">
            <img
              src={`${server}${attrib?.instructor_img?.formats?.thumbnail?.url}`}
              alt="instructor"
            />
          </div>
          <div className="author-content">
            <h6 className="title">{attrib?.instructor_name}</h6>
            <span className="subtitle">{attrib?.instructor_title}</span>
            <p>{attrib?.instructor_desc}</p>
            <p>{attrib?.country}</p>
            <ul className="social-share">
              <li>{attrib?.instructor_email}</li>
              <li>{attrib?.contact}</li>
            </ul>
            <ul className="social-share">
              {attrib?.instructor_linkedIn && (
                <li>
                  <a
                    href={attrib?.instructor_linkedIn}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="icon-linkedin2"></i>
                  </a>
                </li>
              )}
              {attrib?.instructor_fb && (
                <li>
                  <a
                    href={attrib?.instructor_fb}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="icon-facebook"></i>
                  </a>
                </li>
              )}
              {attrib?.instructor_x && (
                <li>
                  <a
                    href={attrib?.instructor_x}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="icon-twitter"></i>
                  </a>
                </li>
              )}
              {attrib?.instructor_youtube && (
                <li>
                  <a
                    href={attrib?.instructor_youtube}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="icon-youtube"></i>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseInstructor;
