import React, { useEffect } from 'react';
import { Footer, Header } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import CourseTwoArea from './course-2-area';
import useCoursesData from '../../hooks/useCoursesQuery';
import { useSelector } from 'react-redux';

const index = () => {
  const { courses_list, isLoading } = useCoursesData();

  // if user is logged in redirect to dashboard
      const { token, user } = useSelector((state) => state.authLogin);
useEffect(() => {
        if (token || user) {
            const timer = setTimeout(() => {
                window.location.href = '/course-details/lesson'; 
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [token, user]);

if (isLoading) {
    return <div>Loading...</div>; 
  }
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={false} />
                <BreadcrumbThree title="All Course" subtitle="All Courses" />
              {!isLoading  && <CourseTwoArea courses={courses_list || []}/>} 
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;