import React, { useEffect } from 'react';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import CourseDetailsMain from '../../components/course-details';
import { course_data } from '../../data';
import { useDispatch, useSelector } from 'react-redux';
import { selectCourse } from '../../redux/features/courses_slice';
import { fetchCourse } from '../../services/course_redux_thunk';

const course = course_data[0];

const CourseDetails = () => {
   
    const dispatch = useDispatch();
    const courses = useSelector(selectCourse);
    const status = useSelector((state) => state.courses.status);
    const error = useSelector((state) => state.courses.error);
  
    useEffect(() => {
      if (status === 'idle') {
        dispatch(fetchCourses('/courses?populate=*&populate=courses_weekly_curricula.course_lessons.curriculum_lesson_headers')); // replace with your actual endpoint
      }
    }, [status, dispatch]);
    console.log(courses,status,error)
    return (
        <Wrapper>
            <SEO pageTitle={'Course Details'} />
            {<CourseDetailsMain course={course} start={true} />}
        </Wrapper>
    )
}

export default CourseDetails;