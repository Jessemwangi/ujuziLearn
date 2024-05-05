import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import SEO from '../../../components/seo';
import { course_data } from '../../../data';
import { Footer, Header, Wrapper } from '../../../layout';
import LessonDisplay from '../../../components/lessons/lesson-display';
import BreadcrumbSix from '../../../components/breadcrumb/breadcrumb-6';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourse } from '../../../services/course_redux_thunk';
import { selectCourse } from '../../../redux/features/courses_slice';
import { setLocalStorage } from '../../../utils/localstorage';

const DynamicCourseDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const dispatch = useDispatch();
    const course = useSelector(selectCourse);
    const status = useSelector((state) => state.courses.status);
    const error = useSelector((state) => state.courses.error);
  const query =`populate=courses_subcategories&populate=courses_weekly_curricula.course_lessons.curriculum_lesson_headers&populate=courses_categories&populate=courses_instructors.instructor_img&populate=course_intro_video&populate=course_intro_img&populate=course_target_groups&populate=course_learn_lists&populate=course_qualification_equirements&populate=subscription_packages&populate=course_reviews&populate=courses_features&populate=localizations`
  useEffect(() => {
    if (!course || !course?.attributes || course?.attributes?.id !== id) {
        dispatch(fetchCourse(`/courses/${id}?${query}`));
    }
}, [id,dispatch]);
    // const course = course_data.find(item => Number(item.id) === Number(id))
console.log(status)
if(status==='succeeded'){setLocalStorage('course',{name:course?.attributes?.course_name,id:course.id })}
    return (
        <Wrapper>
            <Header no_top_bar={true} /> 
            <BreadcrumbSix title={course?.attributes?.course_name || 'My Course'} page={course?.attributes?.course_name || 'My Course'} />
            {course.attributes && <SEO pageTitle={course?.attributes?.course_name} />}
           {course?.attributes && <LessonDisplay course={course}  />}
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