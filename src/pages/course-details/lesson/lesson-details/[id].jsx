import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import LessonBlogDetails from '../../../../components/lesson_blog-details';
import useCourseLessonData from '../../../../hooks/use_Course_Lesson_Query';
import { QUERY_STRINGS } from '../../../../queries/endpoints';
import SEO from '../../../../components/seo';
import { blog_data } from '../../../../data';
import { Wrapper } from '../../../../layout';
import { getLocalStorage } from '../../../../utils/localstorage';

const DynamicBlogDetails = () => {
    const router = useRouter();
    const [_course, setCourse] = useState();

    useEffect(() => {
      const course = getLocalStorage('course');
      if (course) {
        setCourse(course);
      }
    }, []);
    const { id } = router.query;
    const q = QUERY_STRINGS.courses.lessonList.url;
    const { courses_list, isLoading } = useCourseLessonData(id,q)
  
    return (
        <Wrapper>
            <SEO pageTitle={_course?.title} />
            { !isLoading && <LessonBlogDetails lessons={courses_list} course_Id = {_course?.id} title={_course?.title || 'My Lessons'} /> }
        </Wrapper>
    )
}

export default DynamicBlogDetails;

export async function getStaticPaths() {
    const paths = blog_data.map((blog) => {
        return {
            params:{
                id:`${blog.id}`
            }
        }
    })
    return {
      paths,
      fallback: false,
    }
  }

export async function getStaticProps(context) {
    return {
        props: {}
    }
}