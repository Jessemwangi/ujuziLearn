import { useRouter } from 'next/router';
import React from 'react';
import SEO from '../../../components/seo';
import { course_data } from '../../../data';
import { Footer, Header, Wrapper } from '../../../layout';
import LessonDisplay from './lesson-display';
import BreadcrumbSix from '../../../components/breadcrumb/breadcrumb-6';

const DynamicCourseDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log(id)
    const course = course_data.find(item => Number(item.id) === Number(id))
    return (
        <Wrapper>
            <Header no_top_bar={true} /> 
            <BreadcrumbSix title="Course Details" page="Fun learning with Ujuzi" />
            <SEO pageTitle={'Course Details'} />
            <LessonDisplay course={course} />
            <Footer style_2={'footer-dark bg-image footer-style-2'} />
        </Wrapper>
    )
}

export default DynamicCourseDetails;

export async function getStaticPaths() {
    const paths = course_data.map((course) => {
        return {
            params:{
                id:`${course.id}`
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