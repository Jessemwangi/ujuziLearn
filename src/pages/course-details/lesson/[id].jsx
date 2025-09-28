import { useRouter } from "next/router";
import React, { useEffect } from "react";
import SEO from "../../../components/seo";
import { Footer, Header, Wrapper } from "../../../layout";
import LessonDisplay from "../../../components/lessons/lesson-display";
import BreadcrumbSix from "../../../components/breadcrumb/breadcrumb-6";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourse, fetchSecureCourse } from "../../../services/course_redux_thunk";
import { setLocalStorage } from "../../../utils/localstorage";
import { QUERY_STRINGS } from "../../../queries/endpoints";
import SessionExpiredModal from "../../../components/SessionExpiredModal";
import StateHandler from "../../../components/ErrorStates/StateHandler";

const DynamicCourseDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { sessionInfo, user } = useSelector((state) => state.authLogin);
  const token = sessionInfo ? sessionInfo.token : null;
  const { coursesecureCourse, status, error } = useSelector((state) => state.courses);
  const { id, docId } = router.query;

  const query = `/studentsite/students/course-details/${id}`;

  useEffect(() => {
    if (!token || !user) {
      const timer = setTimeout(() => {
        window.location.href = '/sign-in';
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [token, user]);

  useEffect(() => {
    if (router.isReady && id && docId) {
      dispatch(fetchSecureCourse(query,false));
    }
  }, [id, docId, router.isReady, dispatch, query]);

  const isLoading = !router.isReady || status === "loading" || !id || !docId;
  const isError = status === "failed";
  const isEmpty = !coursesecureCourse && status === "succeeded";

  const handleRetry = () => {
    dispatch(fetchCourse(query));
  };

  const errorConfig = (() => {
    if (error?.error?.message === 'Token expired') {
      return { sessionExpired: true };
    }
    if (error?.error?.status === 404) {
      return {
        title: "Course Not Found",
        message: "Sorry, we couldn't find the course you were looking for.",
        showHome: true,
        showRetry: false
      };
    }
    return {
      title: error?.message || "Something Went Wrong",
      message: "There was an error loading the course details. Either the course was discontinued or you don't have access. Please try again later or contact your agent.",
      showHome: true,
      showRetry: true
    };
  })();

  if (status === "succeeded" && router.isReady && coursesecureCourse) {
    setLocalStorage("course", {
      name: coursesecureCourse?.course_name,
      id: coursesecureCourse.id,
      docId: coursesecureCourse?.documentId,
    });
  }

  return (
    <Wrapper>
      <SEO pageTitle={coursesecureCourse?.course_name || "Course Details"} />

      {errorConfig.sessionExpired ? (
        <SessionExpiredModal />
      ) : (
        <StateHandler
          isLoading={isLoading}
          isError={isError}
          error={error}
          data={coursesecureCourse}
          isEmpty={isEmpty}
          headDisplay={false}
          // Loading
          loadingMessage="Loading course details..."
          showSkeleton={false}

          // Error
          onRetry={handleRetry}
          onRefetch={handleRetry}
          showRetry={errorConfig.showRetry}
          showHome={errorConfig.showHome}
          showRefetch={true}
          customErrorMessage={errorConfig.message}

          // Empty
          showEmptyAction={true}
          emptyActionText="Browse Courses"
          onEmptyAction={() => router.push('/courses')}
        >
          <BreadcrumbSix
            intro_mage={coursesecureCourse?.course_intro_img?.url}
            title={coursesecureCourse?.course_name || "My Course"}
            course={coursesecureCourse?.course_name || "My Course"}
          />
          {coursesecureCourse?.id ? (
            <LessonDisplay coursesecureCourse={course} />
          ) : (
            <p>Failed to load the course</p>
          )}
          <Footer style_2={"footer-dark bg-image footer-style-2"} />
        </StateHandler>
      )}
    </Wrapper>
  );
};

export default DynamicCourseDetails;
