import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../../utils/localstorage";

const SingleTopicAccordion = ({
  title,
  content = "no lesson found",
  parentId,
  id,
}) => {
  const [show, setShow] = useState(true);
  const [course, setCourse] = useState({});

  useEffect(() => {
    const course_ = getLocalStorage('course');
    if (course_) {
      setCourse(course_);
    }
  }, []);
  const uniqueId = `topic-${Math.random().toString(36).substr(2, 9)}`;

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className="accordion-item">
      <h4 className="accordion-header" style={{ fontSize: 14 }} id={uniqueId}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#question-${uniqueId}`}
          aria-expanded="true"
        >
          <div>
          <i className="icon-65"></i> {title}
          </div>
        </button>
      </h4>
      <Link href={`/course-details/lesson/lesson-details/${id}`} passHref>
  <div 
    id={`question-${uniqueId}`} 
    className="accordion-collapse collapse show" 
    data-bs-parent={`#${parentId}`}
    style={{ cursor: 'pointer', transition: 'color 0.3s, transform 0.3s', color:'blue' }}
    onMouseEnter={(e) => { e.target.style.color = '#9C27B0'; e.target.style.transform = 'scale(1.05)'; }}
    onMouseLeave={(e) => { e.target.style.color = ''; e.target.style.transform = ''; }}
  >
    <div className="accordion-body">
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  </div>
</Link>

    </div>
  );
};

export default SingleTopicAccordion;
