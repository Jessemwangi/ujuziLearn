import React, { useEffect } from 'react';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import CourseDetailsMain from '../../components/course-details';
import { course_data } from '../../data';
import useCoursesData from '../../hooks/useCourseQuery';

const course = course_data[0];

const CourseDetails = () => {
  const { courses_list, isLoading } = useCoursesData();
    return (
        <Wrapper>
            <SEO pageTitle={'Course Details'} />
            {!isLoading && <CourseDetailsMain course={courses_list[0]}  start={true} />}
        </Wrapper>
    )
}

export default CourseDetails;