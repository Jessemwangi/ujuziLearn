import React from 'react';

const CourseCurriculum = ({ course }) => {
  return (
    <div className="course-tab-content">
      <div className="course-curriculam">
        <h3 className="heading-title">Course Curriculum</h3>
        <p>{course.weekly_curriculum_intro}</p>
        {course.courses_weekly_curricula?.data?.map(({ attributes, id, curriculum_reg }) => (
          <div key={`${curriculum_reg}${id}`} className="text mt-2 p-2" style={{ border: "1px grey solid" }}>
            <h5 className="title">{attributes?.curriculum_title}</h5>
            <p>{attributes?.curriculum_desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCurriculum;
