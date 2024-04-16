import React from 'react';
import { Footer, Header } from '../../../layout';
import CourseBreadcrumb from '../../../components/breadcrumb/breadcrumb-5';
import LessonDisplay from './lesson-display';
// import { Footer, Header } from '../../../layout';
// import CourseBreadcrumb from '../breadcrumb/breadcrumb-5';
// import LessonDisplay from './lesson-display';

const index = ({course}) => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                lesson will be here
                <Header no_top_bar={true} /> 
                <CourseBreadcrumb course={course} subtitle="Course Details" />
                <LessonDisplay course={course} />
             <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;