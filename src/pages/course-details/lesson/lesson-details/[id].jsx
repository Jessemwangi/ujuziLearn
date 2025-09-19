import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import LessonBlogDetails from "../../../../components/lesson_blog-details";
import useCourseLessonData from "../../../../hooks/use_Course_Lesson_Query";
import { QUERY_STRINGS } from "../../../../queries/endpoints";
import SEO from "../../../../components/seo";
import { blog_data } from "../../../../data";
import { Wrapper } from "../../../../layout";
import { getLocalStorage } from "../../../../utils/localstorage";

const DynamicBlogDetails = () => {
  const router = useRouter();
  const [_course, setCourse] = useState();

  useEffect(() => {
    const course = getLocalStorage("course");
    if (course) {
      setCourse(course);
    }
  }, []);
  const { id, docId } = router.query;

  const q = QUERY_STRINGS.courses.lessonList.url;

  const { courses_list, isLoading, isError, error } = useCourseLessonData(
    id,
    q
  );

  if (!router.isReady || isLoading || !id) {
    return (
      <Wrapper>
        <SEO pageTitle={"Loading..."} />
        <div style={{ textAlign: "center", padding: "80px 0" }}>
          <h2>Loading Course Details...</h2>
        </div>
      </Wrapper>
    );
  }

  if (isError) {
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
          <h2>Error loading lesson data.</h2>
          <p>{error.message}</p>
        </div>
      </Wrapper>
    );
  }
  if (courses_list || courses_list.length === 0) {
    return (
      <Wrapper>
        <SEO pageTitle={_course?.title} />
        {!isLoading && (
          <LessonBlogDetails
            lessons={courses_list}
            course_Id={_course?.id}
            title={_course?.title || "My Lessons"}
            docId={_course?.documentId}
          />
        )}
      </Wrapper>
    );
  }
  return null;
};
export default DynamicBlogDetails;
