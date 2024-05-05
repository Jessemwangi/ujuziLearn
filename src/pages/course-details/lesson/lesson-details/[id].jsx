import { useRouter } from 'next/router';
import React from 'react';
import LessonBlogDetails from '../../../../components/lesson_blog-details';
import useCourseLessonData from '../../../../hooks/use_Course_Lesson_Query';
import { QUERY_STRINGS } from '../../../../queries/endpoints';
import SEO from '../../../../components/seo';
import { blog_data } from '../../../../data';
import { Wrapper } from '../../../../layout';
import { getLocalStorage } from '../../../../utils/localstorage';

const DynamicBlogDetails = () => {
    const router = useRouter();
    let title ='My lesson';
    const { id } = router.query;
    const q = QUERY_STRINGS.courses.lessonList.url;
    const { courses_list, isLoading } = useCourseLessonData(id,q)
    const course = getLocalStorage('course') ;
    if (course){title = course?.name};
    return (
        <Wrapper>
            <SEO pageTitle={title} />
             <LessonBlogDetails lessons={courses_list} title={title} /> 
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