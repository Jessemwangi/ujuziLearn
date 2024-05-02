import React, { useEffect } from 'react';
import { Footer, Header } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import CourseTwoArea from './course-2-area';
import { useDispatch, useSelector } from 'react-redux';
import { selectCourses } from '../../redux/features/courses_slice';
import { fetchCourses } from '../../services/course_redux_thunk';

const index = () => {
    const dispatch = useDispatch();
    const courses = useSelector(selectCourses);
    const status = useSelector((state) => state.courses.status);
    const error = useSelector((state) => state.courses.error);
  
    useEffect(() => {
      if (status === 'idle') {
        dispatch(fetchCourses('/courses?populate=*&populate=courses_weekly_curricula.course_lessons.curriculum_lesson_headers')); // replace with your actual endpoint
      }
    }, [status, dispatch]);
    console.log(courses,status,error)
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <BreadcrumbThree title="All Course" subtitle="All Courses" />
                <CourseTwoArea _courses={courses || []}/>
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;