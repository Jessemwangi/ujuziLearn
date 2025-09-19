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

const DynamicCourseDetails = () => {
  const router = useRouter();
  const { id, docId } = router.query;
  const dispatch = useDispatch();
  const { course, status, error } = useSelector((state) => state.courses);

  const query = QUERY_STRINGS.courses.all.url;

  useEffect(() => {
    if (router.isReady && id && docId) {
      const fullUrl = `/courses/${docId}?${query}`;
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
        <SEO pageTitle={course?.title || "Course Details"} />
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
