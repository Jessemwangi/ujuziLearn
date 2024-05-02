import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import SEO from '../../components/seo';
import { course_data } from '../../data';
import { Wrapper } from '../../layout';
import CourseDetailsMain from '../../components/course-details';
import { useDispatch, useSelector } from 'react-redux';
import { selectCourse } from '../../redux/features/courses_slice';
import { fetchCourse } from '../../services/course_redux_thunk';

const DynamicCourseDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const course = course_data.find(item => Number(item.id) === Number(id))
    const dispatch = useDispatch();
    const courses = useSelector(selectCourse);
    const status = useSelector((state) => state.courses.status);
    const error = useSelector((state) => state.courses.error);
  const query =`populate=courses_subcategories&populate=courses_weekly_curricula.course_lessons.curriculum_lesson_headers&populate=courses_categories&populate=courses_instructors.instructor_img&populate=course_intro_video&populate=course_intro_img&populate=course_target_groups&populate=course_learn_lists&populate=course_qualification_equirements&populate=subscription_packages&populate=course_reviews&populate=courses_features&populate=localizations`
  useEffect(() => {
    if (!courses || !courses.attributes || courses.attributes.id !== id) {
        dispatch(fetchCourse(`/courses/${id}?${query}`));
    }
}, [id,dispatch]);


    return (
        <Wrapper>
            <SEO pageTitle={'Course Details'} />
          {courses.attributes &&  <CourseDetailsMain courses={courses.attributes} course={course} start={true}/>}
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