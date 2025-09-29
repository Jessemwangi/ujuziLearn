import React, { useEffect, useState } from "react";
import CourseBlogDetailsArea from "./course-blog-details-area";
import BreadcrumbThree from "../breadcrumb/breadcrumb-3";
import { Footer, Header } from "../../layout";
import useGetAllWkCourseData from "../../hooks/use_weekly_curriculum";
import StateHandler from "../ErrorStates/StateHandler";


const CourseBlogDetailsWrapper = ({ lessons, course_Id, title, docId }) => {
  // const q = `populate=intro_pic&populate=course_lessons&courses=${course_Id}`;
  const q = `/studentsite/students/weekly-curriculums?courseId=${course_Id}`;
  const { all_wk_curri_list, isLoading, isError, error } = useGetAllWkCourseData(q);
  const [courseLessons, setCourseLessons] = useState([]);
  useEffect(() => {
    if (!isLoading && all_wk_curri_list) {
      const lessonsWithPicUrl = all_wk_curri_list.flatMap((curriculum) => {
        return (curriculum.course_lessons || []).map((lesson) => ({
          ...lesson,
        }));
      });

      setCourseLessons(lessonsWithPicUrl);
    }
  }, [isLoading, all_wk_curri_list]);
  const isEmpty = !courseLessons || courseLessons.length === 0;

  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={true} />
        <BreadcrumbThree title={title} subtitle={title} />

        <StateHandler
          isLoading={isLoading}
          isError={isError}
          error={error}
          data={courseLessons}
          isEmpty={isEmpty}

          // Loading
          loadingMessage="Loading weekly curriculum..."
          showSkeleton={false}

          // Error
          showRetry={true}
          showHome={true}
          onRetry={() => window.location.reload()}
          onRefetch={() => window.location.reload()}
          showRefetch={true}
          customErrorMessage="Unable to load weekly curriculum. Please try again later."

          // Empty
          showEmptyAction={true}
          emptyActionText="Browse Courses"
          onEmptyAction={() => window.location.href = '/courses'}
        >
          <CourseBlogDetailsArea
            lessons={lessons}
            courseLessons={courseLessons}
          />
        </StateHandler>

        <Footer style_2={"footer-dark bg-image footer-style-2"} />
      </div>
    </div>
  );
};

export default CourseBlogDetailsWrapper;
