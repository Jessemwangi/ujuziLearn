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
import { QUERY_STRINGS } from '../../../queries/endpoints';

const DynamicCourseDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const dispatch = useDispatch();
    const course = useSelector(selectCourse);
    const status = useSelector((state) => state.courses.status);
    const error = useSelector((state) => state.courses.error);
  const query =  QUERY_STRINGS.courses.all.url;
  useEffect(() => {
    if (!course || !course?.attributes || course?.attributes?.id !== id) {
        dispatch(fetchCourse(`/courses/${id}?${query}`));
    }
}, [id,dispatch]);
    // const course = course_data.find(item => Number(item.id) === Number(id))
if(status==='succeeded'){setLocalStorage('course',{name:course?.attributes?.course_name,id:course.id })}
    return (
        <Wrapper>
            <Header no_top_bar={true} /> 
            <BreadcrumbSix intro_mage={course?.attributes?.course_intro_img?.data?.attributes?.url} title={course?.attributes?.course_name || 'My Course'} course={course?.attributes?.course_name || 'My Course'} />
             <SEO pageTitle={course?.attributes?.course_name} />
           {course?.attributes ? (<LessonDisplay course={course}/>  ):<p>Fail to load the course</p>}
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