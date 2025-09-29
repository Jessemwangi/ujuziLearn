import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import LessonBlogDetails from "../../../../components/lesson_blog-details";
import useCourseLessonData from "../../../../hooks/use_Course_Lesson_Query";
import { QUERY_STRINGS } from "../../../../queries/endpoints";
import SEO from "../../../../components/seo";
import { Wrapper } from "../../../../layout";
import { getLocalStorage } from "../../../../utils/localstorage";
import StateHandler from "../../../../components/ErrorStates/StateHandler";

const DynamicBlogDetails = () => {
  const router = useRouter();
  const [_course, setCourse] = useState();

  useEffect(() => {
    const course = getLocalStorage("course");
    if (course) {
      setCourse(course);
    }
  }, []);

  const { id, lessonId } = router.query;
  const q = `/studentsite/students/lesson-details`;

  const { courses_list, isLoading, isError, error } = useCourseLessonData(id, q);
  const isReady = router.isReady && id;
  const isEmpty = !courses_list || courses_list.length === 0;

  const handleRetry = () => {
    router.reload(); 
  };

  const errorConfig = error?.status === 404
    ? {
        title: "Course Not Found",
        message: "Sorry, we couldn't find the course you were looking for.",
        showHome: true,
        showRetry: false
      }
    : {
        title: "Error Loading Lessons",
        message: error?.message || "Something went wrong while loading lesson data.",
        showHome: true,
        showRetry: true
      };
const loading = !isReady || isLoading;
  return (
    <Wrapper>
      <SEO pageTitle={_course?.name || "Course Lessons"} />

      <StateHandler
        isLoading={loading}
        isError={isError}
        error={error}
        data={courses_list}
        isEmpty={isEmpty && !isLoading && !isError}

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
        {courses_list?.lesson && !loading && <LessonBlogDetails
          lessons={courses_list.lesson}
          course_Id={_course?.id}
          title={_course?.name || "My Lessons"}
          docId={_course?.docId}
        />}
      </StateHandler>
    </Wrapper>
  );
};

export default DynamicBlogDetails;
