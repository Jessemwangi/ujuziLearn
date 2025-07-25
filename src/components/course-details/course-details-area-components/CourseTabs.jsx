import React from 'react';
import CourseOverview from './CourseOverview';
import CourseCurriculum from './CourseCurriculum';
import CourseInstructor from './CourseInstructor';
import CourseReviews from './CourseReviews';

const CourseTabs = ({ course }) => {
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <button className="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview"
            type="button" aria-controls="overview" aria-selected="true">Overview</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" id="carriculam-tab" data-bs-toggle="tab" data-bs-target="#carriculam"
            type="button" aria-controls="carriculam" aria-selected="false">Carriculam</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" id="instructor-tab" data-bs-toggle="tab" data-bs-target="#instructor"
            type="button" aria-controls="instructor" aria-selected="false">Instructor</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review"
            type="button" aria-controls="review" aria-selected="false">Reviews</button>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="overview">
          <CourseOverview course={course} />
        </div>
        <div className="tab-pane fade" id="carriculam">
          <CourseCurriculum course={course} />
        </div>
        <div className="tab-pane fade" id="instructor">
          <CourseInstructor instructors={course.courses_instructors} />
        </div>
        <div className="tab-pane fade" id="review">
          <CourseReviews ratings={course.course_ratings} reviews={course.course_reviews} />
        </div>
      </div>
    </>
  );
};

export default CourseTabs;
