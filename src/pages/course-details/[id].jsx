import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "../../layout";
import SEO from "../../components/seo";
import CourseDetailsMain from "../../components/course-details";
import { fetchCourse, fetchSecureCourse } from "../../services/course_redux_thunk";
import StateHandler from "../../components/ErrorStates/StateHandler";

const DynamicCourseDetails = () => {
  const router = useRouter();
  const { id, docId } = router.query;

  const dispatch = useDispatch();
  const { course, status, error } = useSelector((state) => state.courses);
 
  const query = `?populate[courses_subcategories]=true&populate[courses_weekly_curricula][populate][course_lessons][populate][curriculum_lesson_headers]=true&populate[courses_categories]=true&populate[courses_instructors][populate][instructor_img]=true&populate[course_learn_lists]=true&populate[course_qualification_equirements]=true&populate[course_intro_video]=true&populate[course_intro_img]=true&populate[course_target_groups][populate]=*&populate[subscription_packages]=true&populate[course_reviews]=true&populate[courses_features]=true`;

  useEffect(() => {
    if (router.isReady && id && docId) {
      const fullUrl = `courses/${docId}/${query}`;
      dispatch(fetchCourse(fullUrl));
    }
  }, [id, docId, router.isReady, dispatch, query]);

  const isLoading = !router.isReady || status === "loading" || !id || !docId;
  const hasError = status === "failed";

  const handleRetry = () => {
    if (router.isReady && id && docId) {
      const fullUrl = `courses/${docId}/${query}`;
      dispatch(fetchSecureCourse(fullUrl));
    }
  };
  // Custom error configuration for specific cases
  const getCustomErrorConfig = () => {
    if (error?.status === 404) {
      return {
        title: "Course Not Found",
        message: "Sorry, we couldn't find the course you were looking for.",
        showHome: true,
        showRetry: false
      };
    }
    
    return {
      title: "Something Went Wrong",
      message: "There was an error loading the course details. Please try again later.",
      showHome: true,
      showRetry: true
    };
  };

  const errorConfig = hasError ? getCustomErrorConfig() : null;

  return (
    <Wrapper>
      <SEO pageTitle={isLoading ? "Loading Course..." : course?.course_name || "Course Details"} />
      
      <StateHandler
        isLoading={isLoading}
        isError={hasError}
        error={error}
        data={course}
        isEmpty={!course && !isLoading && !hasError}
        
        // Custom messages
        loadingMessage="Loading course details..."
        emptyMessage="Course details not available."
        
        // Loading options
        showSkeleton={true}
        skeletonCount={1}
        skeletonType="course"
        
        // Error handling - use custom config or defaults
        onRetry={handleRetry}
        onRefetch={handleRetry}
        showRetry={errorConfig?.showRetry ?? true}
        showHome={errorConfig?.showHome ?? true}
        showRefetch={true}
        customErrorMessage={errorConfig?.message}
        
        // Empty state options
        showEmptyAction={true}
        emptyActionText="Browse Courses"
        onEmptyAction={() => router.push('/courses')}
      >
        <CourseDetailsMain id={id} docId={docId} course={course} start={true} />
      </StateHandler>
    </Wrapper>
  );
};

export default DynamicCourseDetails;