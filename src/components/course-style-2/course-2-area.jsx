import React from 'react';
import { useState } from 'react';
import { course_data } from '../../data';
import SortingArea from '../course-filter/sorting-area';
import CourseTypeSix from '../course/course-type-six';

const CourseTwoArea = ({_courses}) => {
    const coursePerView = 6;
    const [next, setNext] = useState(coursePerView);
    const [courses,setCourses] = useState(_courses);
    // handleLoadData
    const handleLoadData = () => {
        setNext(value => value + 3)
    }
    return (
        <div className="edu-course-area course-area-1 gap-tb-text">
            <div className="container">
               {_courses.length > 0 && <SortingArea course_items={_courses} num={courses?.slice(0,next)?.length} setCourses={setCourses} courses={courses} />}

                <div className="row g-5">
                    {_courses.length > 0 ?
                    (_courses?.map(({attributes,id}) => (
                        <div key={id} className="col-md-6 col-lg-4">
                            <CourseTypeSix data={attributes} id={id} classes="course-box-shadow" />
                        </div>
                    ))):<p>No courses available for viewing</p>}
                </div>

                {next < courses.length && 
                    <div onClick={handleLoadData} className="load-more-btn" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1200">
                        <a className="edu-btn" style={{ cursor: 'pointer' }}>Load More <i className="icon-56"></i></a>
                    </div>
                }
            </div>
        </div>
    )
}

export default CourseTwoArea;