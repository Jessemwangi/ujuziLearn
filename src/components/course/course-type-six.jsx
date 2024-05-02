import React from 'react';
import Link from 'next/link';

const CourseTypeSix = ({ data, classes ,id}) => {
    return (
        <div className={`edu-course course-style-3 ${ classes ? classes : '' }`}>
            <div className="inner">
                <div className="thumbnail">
                    <Link href={`/course-details/${id}`}>
                        <a>
                            <img src={`/assets/images/course/course-04/${data?.img}`} alt="Course Meta" />
                        </a>
                    </Link>
                    <div className="time-top">
                        <span className="duration"><i className="icon-61"></i>{data?.course_outline}</span>
                    </div>
                </div>

                <div className="content">
                    <span className="course-level">{data?.level}</span>
                    <h5 className="title">
                        <Link href={`/course-details/${id}`}>
                            <a>{data?.course_name}</a>
                        </Link>
                    </h5>
                    <p>{data?.short_desc}</p>
                    <div className="course-rating">
                        <div className="rating">
                            <i className="icon-23"></i>
                            <i className="icon-23"></i>
                            <i className="icon-23"></i>
                            <i className="icon-23"></i>
                            <i className="icon-23"></i>
                        </div>
                        <span className="rating-count">({data.rating} /{data.rating_count} Rating)</span>
                    </div>
                    <div className="read-more-btn">
                        <Link className="edu-btn btn-small btn-secondary" href={`/course-details/${id}`} style={{ cursor: 'pointer' }}>
                        <a className="edu-btn btn-small btn-secondary">{data.course_name}
                            <i className="icon-4"></i>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CourseTypeSix;