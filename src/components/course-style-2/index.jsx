import React, { useEffect } from 'react';
import { Footer, Header } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import CourseTwoArea from './course-2-area';
import useCoursesData from '../../hooks/useCoursesQuery';

const index = () => {
  const { courses_list, isLoading } = useCoursesData();

    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <BreadcrumbThree title="All Course" subtitle="All Courses" />
              {!isLoading  && <CourseTwoArea courses={courses_list || []}/>} 
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;