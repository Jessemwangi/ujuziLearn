import React from 'react';
import CourseDetailsSidebar from '../common/sidebar/course-details-sidebar';
import CourseTabs from './course-details-area-components/CourseTabs';


const CourseDetailsArea = ({ id, course, start = true }) => {
  return (
    <section className="edu-section-gap course-details-area">
      <div className="container">
        <div className="row row--30">
          <div className="col-lg-8">
            <div className="course-details-content">
              <CourseTabs course={course} />
            </div>
          </div>

          <div className="col-lg-4">
            <CourseDetailsSidebar id={id} course={course} start={start} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsArea;
