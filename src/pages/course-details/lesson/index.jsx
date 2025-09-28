import { Footer, Header } from "../../../layout";
import BreadcrumbThree from "../../../components/breadcrumb/breadcrumb-3";
import CourseTwoArea from "../../../components/course-style-2/course-2-area";
import { useSubscribedCourses } from "../../../hooks/useCoursesQuery";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SectionLoader from "../../../ui/SectionLoader";
import EmptyState from "../../../components/ErrorStates/EmptyState";
import ErrorHandler from "../../../components/ErrorStates/ErrorHandler";

const SubscribedCoursesIndex = () => { 
  const { sessionInfo, user } = useSelector((state) => state.authLogin);
  const token = sessionInfo ? sessionInfo.token : null;
  
  useEffect(() => {
    if (!token || !user) {
      const timer = setTimeout(() => {
        window.location.href = "/sign-in";
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [token, user]);

  const { courses_list, isLoading, error, refetch } = useSubscribedCourses(user?.id ?? null);

  if (isLoading || !user || !token) {
    return (
      <div className="sticky-header">
        <div id="main-wrapper" className="main-wrapper">
          <Header no_top_bar={false} />
          <BreadcrumbThree title="Subscribed Course" subtitle="My Courses" />
          <SectionLoader />
          <Footer style_2={"footer-dark bg-image footer-style-2"} />
        </div>
      </div>
    );
  }

  if (error && !isLoading) {
    return (
      <ErrorHandler
        error={error} 
        onRefetch={refetch} 
        showRefetch={true} 
      />
    );
  }
  
  const isListEmpty = !courses_list || courses_list.length === 0;

  if (isListEmpty && !isLoading && user) {
    return (
      <EmptyState 
        title="No Subscribed Courses"
        message="You haven't subscribed to any courses yet. Explore our catalog to get started!"
        showAction={true}
        actionText="Browse All Courses"
        actionLink="/course-4" 
      />
    );
  }

  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={false} />
        {!isLoading &&
          courses_list && courses_list.length > 0 && (
            <>
        <BreadcrumbThree title="Subscribed Course" subtitle="My Courses" />

        <CourseTwoArea courses={courses_list} lst={true} />

        <Footer style_2={"footer-dark bg-image footer-style-2"} />
            </>
          )
        }
      </div>
    </div>
  );
};

export default SubscribedCoursesIndex;