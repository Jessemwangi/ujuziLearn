import { Footer, Header } from "../../../layout";
import BreadcrumbThree from "../../../components/breadcrumb/breadcrumb-3";
import CourseTwoArea from "../../../components/course-style-2/course-2-area";
import {
  useCoursesData,
  useSubscribedCourses,
} from "../../../hooks/useCoursesQuery";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SectionLoader from "../../../ui/SectionLoader";

const index = () => {
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

  const { courses_list, isLoading } = useSubscribedCourses(user?.id ?? null);

  //get agents list
  //
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={false} />
        <BreadcrumbThree title="Subscribed Course" subtitle="My Courses" />

        {isLoading ? (
          <SectionLoader />
        ) : (
          <CourseTwoArea courses={courses_list || []} lst={true} />
        )}
        <Footer style_2={"footer-dark bg-image footer-style-2"} />
      </div>
    </div>
  );
};

export default index;
