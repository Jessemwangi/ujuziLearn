import { useRouter } from 'next/router';
import React from 'react';
import LessonBlogDetails from './lesson_blog-details';
import useCourseLessonData from '../../../../hooks/use_Course_Lesson_Query';
import { QUERY_STRINGS } from '../../../../queries/endpoints';
import SEO from '../../../../components/seo';
import { blog_data } from '../../../../data';
import { Wrapper } from '../../../../layout';

const DynamicBlogDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const blog = blog_data.find(item => Number(item.id) === Number(id))
    const q = QUERY_STRINGS.courses.lessonList.url;
    const { courses_list, isLoading } = useCourseLessonData(id,q)
    console.log(courses_list)
    return (
        <Wrapper>
            <SEO pageTitle={'Learning is fun'} />
             <LessonBlogDetails course={courses_list} /> 
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