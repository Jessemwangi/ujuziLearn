import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "../../layout";
import SEO from "../../components/seo";
import CourseDetailsMain from "../../components/course-details";
import { fetchCourse } from "../../services/course_redux_thunk";

const DynamicCourseDetails = () => {
  const router = useRouter();
  const { id, docId } = router.query; // Get both id from route and docId from query

  const dispatch = useDispatch();
  // const { data: course, status, error } = useSelector((state) => state.courses);
  const { course, status, error } = useSelector((state) => state.courses);

  // const query = `?populate[courses_subcategories]=true&populate[courses_weekly_curricula][populate][course_lessons][populate][curriculum_lesson_headers]=true&populate[courses_categories]=true&populate[courses_instructors][populate][instructor_img]=true&populate[course_learn_lists]=true&populate[course_qualification_equirements]=true&populate[course_intro_video]=true&populate[course_intro_img]=true&populate[course_target_groups][populate]=*&populate[subscription_packages]=true&populate[course_reviews]=true&populate[courses_features]=true`;
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
    if (error?.status === 404) {
      return (
        <Wrapper>
          <SEO pageTitle={"Course Not Found"} />
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <h2>Course Not Found 😕</h2>
            <p>Sorry, we couldn't find the course you were looking for.</p>
          </div>
        </Wrapper>
      );
    }

    return (
      <Wrapper>
        <SEO pageTitle={"Error"} />
        <div style={{ textAlign: "center", padding: "80px 0" }}>
          <h2>Something Went Wrong</h2>
          <p>
            There was an error loading the course details. Please try again
            later.
          </p>
          <p>Error: {error?.error?.message}</p>
        </div>
      </Wrapper>
    );
  }

  // Handle success state
  if (status === "succeeded" && course) {
    return (
      <Wrapper>
        <SEO pageTitle={course?.course_name || "Course Details"} />
        <CourseDetailsMain id={id} docId={docId} course={course} start={true} />
      </Wrapper>
    );
  }

  return null;
};

export default DynamicCourseDetails;
