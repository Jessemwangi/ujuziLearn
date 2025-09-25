import { useRouter } from "next/router";
import React, { useEffect } from "react";
import SEO from "../../../components/seo";
import { course_data } from "../../../data";
import { Footer, Header, Wrapper } from "../../../layout";
import LessonDisplay from "../../../components/lessons/lesson-display";
import BreadcrumbSix from "../../../components/breadcrumb/breadcrumb-6";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourse } from "../../../services/course_redux_thunk";
import { selectCourse } from "../../../redux/features/courses_slice";
import { setLocalStorage } from "../../../utils/localstorage";
import { QUERY_STRINGS } from "../../../queries/endpoints";
import SessionExpiredModal from "../../../components/SessionExpiredModal";

const DynamicCourseDetails = () => {
  const router = useRouter();

        const { token, user } = useSelector((state) => state.authLogin);
useEffect(() => {
        if (!token || !user) {
            const timer = setTimeout(() => {
                window.location.href = '/sign-in'; 
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [token, user]);

  const { id, docId } = router.query;
  const dispatch = useDispatch();
  const { course, status, error } = useSelector((state) => state.courses);

// const query = `?populate[courses_subcategories]=true&populate[courses_weekly_curricula][populate][course_lessons][populate][curriculum_lesson_headers]=true&populate[courses_categories]=true&populate[courses_instructors][populate][instructor_img]=true&populate[course_learn_lists]=true&populate[course_qualification_equirements]=true&populate[course_intro_video]=true&populate[course_intro_img]=true&populate[course_target_groups][populate]=*&populate[subscription_packages]=true&populate[course_reviews]=true&populate[courses_features]=true`; 
  // const query = QUERY_STRINGS.courses.all.url;
const query = `/studentsite/students/course-details/${id}`;
  useEffect(() => {
    if (router.isReady && id && docId) {
      const fullUrl = query;
      dispatch(fetchCourse(fullUrl));
    }
  }, [id, docId, router.isReady, dispatch, query]);

  // Handle loading state
  if (!router.isReady || status === "loading" || !id || !docId) {
    return (
      <Wrapper>
        <SEO pageTitle={"Loading..."} />
        <div style={{ textAlign: "center", padding: "80px 0" }}>
          <h2>Loading Course Details...</h2>
        </div>
      </Wrapper>
    );
  }

  // Handle error states
  if (status === "failed") {
    if (error.error?.status === 404) {
      return (
        <Wrapper>
          <SEO pageTitle={"Course Not Found"} />
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <h2>Course Not Found 😕</h2>
            <p>{error.error?.message ? error?.message : "Sorry, we couldn't find the course you were looking for."}</p>
          </div>
        </Wrapper>
      );
    }
// handle error of token expire
if(error?.error?.message == 'Token expired'){

  return(
<>
<SessionExpiredModal />
</>
);
}
    return (
      <Wrapper>
        <SEO pageTitle={"Error"} />
        <div style={{ textAlign: "center", padding: "80px 0" }}>
          <h2>{error?.message ? error?.message : "Something Went Wrong"}</h2>
          <p>
            There was an error loading the course details. Either the Course was discontinue or
            you dont have access to this course, Please try again later or contact your agent.
          </p>
          <p>Error: {error?.message}</p>
        </div>
      </Wrapper>
    );
  }

  // const course = course_data.find(item => Number(item.id) === Number(id))
  if (status === "succeeded" && router.isReady && course) {
    setLocalStorage("course", {
      name: course?.course_name,
      id: course.id,
      docId: course?.documentId,
    });
  }

  // Handle success state
  if (status === "succeeded" && course) {
    return (
      <Wrapper>
        <Header no_top_bar={true} />
        <BreadcrumbSix
          intro_mage={course?.course_intro_img?.url}
          title={course?.course_name || "My Course"}
          course={course?.course_name || "My Course"}
        />
        <SEO pageTitle={course?.course_name || "Course Details"} />
        {course?.id ? (
          <LessonDisplay course={course} />
        ) : (
          <p>Fail to load the course</p>
        )}
        <Footer style_2={"footer-dark bg-image footer-style-2"} />
      </Wrapper>
    );
  }

  return null;
};

export default DynamicCourseDetails;
