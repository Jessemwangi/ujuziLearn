import Link from "next/link";
import React, { useState } from "react";
import useModal from "../../../hooks/use-modal";
import { Books } from "../../../svg";
import VideoModal from "../popup-modal/video-modal";

// export const lessons = [
//   {
//       title: 'Course Introduction',
//       id:'les1',
//       headers: [
//           {
//               title: 'Header 1.1',
//               content: '<p>Content for Header 1.1</p>'
//           },
//           {
//               title: 'Header 1.2',
//               content: '<p>Content for Header 1.2</p>'
//           }
//       ]
//   },
//   {
//       title: 'Lesson 2',
//       id:'les2',
//       headers: [
//           {
//               title: 'Header 2.1',
//               content: '<p>Content for Header 2.1</p>'
//           }
//       ]
//   }
// ];

const CourseDetailsSidebarNoStart = ({ lessons, course, details_2 = false }) => {
  const {
    img,
    certificate,
    videoId,
    course_price,
    instructor,
    duration,
    student,
    language,
  } = course || {};
  const { isVideoOpen, setIsVideoOpen } = useModal();
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show); 
  };

  return (
    <>
      <div
        className={`course-sidebar-3 ${
          details_2 ? "" : "sidebar-top-position"
        }`}
      >
        <div className="edu-course-widget widget-course-summery">
          <div className="inner">
            <div className="thumbnail">
              <img
                src={`/assets/images/course/course-01/${img}`}
                alt="Course Thumb"
              />
              <a
                onClick={() => setIsVideoOpen(true)}
                style={{ cursor: "pointer" }}
                className="play-btn video-popup-activation"
              >
                <i className="icon-18"></i>
              </a>
            </div>
            <div className="content">
              <h4 className="widget-title">Course Topics:</h4>
              <ul className="course-item">
              {lessons.map(({id,title} )=>
                <li key={id}>
                  <span className="label">
                  <Books />
                  </span>
                  <button onClick={toggleShow} className={`accordion-button ${show ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#header-header-${id}`} >
                   
                 <h6> <span className="value">{title}</span></h6>
                </button>
                </li>
               ) }
               
              </ul>

              <div className="share-area">
                <h4 className="title">Share On:</h4>
                <ul className="social-share">
                  <li>
                    <a href="#">
                      <i className="icon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-linkedin2"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={videoId}
      />
      {/* video modal end */}
    </>
  );
};
export default CourseDetailsSidebarNoStart;