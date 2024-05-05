import React from 'react';
import { Footer, Header } from '../../../layout';
import BreadcrumbThree from '../../../components/breadcrumb/breadcrumb-3';
import CourseTwoArea from '../../../components/course-style-2/course-2-area';
import useCoursesData from '../../../hooks/useCoursesQuery';

const index = () => {
    const { courses_list, isLoading } = useCoursesData();
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                lesson will be here
                <Header no_top_bar={true} /> 
                <BreadcrumbThree title="Subscribed Course" subtitle="My Courses" />
              {!isLoading  && <CourseTwoArea courses={courses_list || []} lst={true}/>}
             <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;