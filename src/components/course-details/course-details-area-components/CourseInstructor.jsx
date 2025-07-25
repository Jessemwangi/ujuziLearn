import React from 'react';
import { server } from '../../../utils/envVariable';

const CourseInstructor = ({ instructors }) => {
  return (
    <div className="course-tab-content">
      {instructors?.data?.map(({ id, attributes }) => (
        <div className="course-instructor" key={id}>
          <div className="thumbnail">
            <img src={`${server}${attributes?.instructor_img?.data?.attributes?.formats?.thumbnail?.url}`} alt="instructor" />
          </div>
          <div className="author-content">
            <h6 className="title">{attributes?.instructor_name}</h6>
            <span className="subtitle">{attributes?.instructor_title}</span>
            <p>{attributes?.instructor_desc}</p>
            <p>{attributes?.country}</p>
            <ul className="social-share">
              <li>{attributes?.instructor_email}</li>
              <li>{attributes?.contact}</li>
            </ul>
            <ul className="social-share">
              {attributes?.instructor_linkedIn && (
                <li><a href={attributes?.instructor_linkedIn} target='_blank' rel="noreferrer"><i className='icon-linkedin2'></i></a></li>
              )}
              {attributes?.instructor_fb && (
                <li><a href={attributes?.instructor_fb} target='_blank' rel="noreferrer"><i className='icon-facebook'></i></a></li>
              )}
              {attributes?.instructor_x && (
                <li><a href={attributes?.instructor_x} target='_blank' rel="noreferrer"><i className='icon-twitter'></i></a></li>
              )}
              {attributes?.instructor_youtube && (
                <li><a href={attributes?.instructor_youtube} target='_blank' rel="noreferrer"><i className='icon-youtube'></i></a></li>
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseInstructor;
