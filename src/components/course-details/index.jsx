import React from 'react';
import { Footer, Header } from '../../layout';
import CourseBreadcrumb from '../breadcrumb/breadcrumb-5';
import CourseDetailsArea from './course-details-area';

const index = ({id, course, start}) => {

    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={false } />
                <CourseBreadcrumb id={id} course={course} subtitle="Course Details"  />
              {course && <CourseDetailsArea id={id} course={course} start={start} />}
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;