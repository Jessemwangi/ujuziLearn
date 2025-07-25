import { Footer, Header } from '../../../layout';
import BreadcrumbThree from '../../../components/breadcrumb/breadcrumb-3';
import CourseTwoArea from '../../../components/course-style-2/course-2-area';
import useCoursesData from '../../../hooks/useCoursesQuery';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const index = () => {
    const { courses_list, isLoading } = useCoursesData();
      const { token, user } = useSelector((state) => state.authLogin);

    if (!token || !user) {
        useEffect(() => {
            const timer = setTimeout(() => {
                window.location.href = '/sign-in'; // Redirect to login after 1 second
            }, 1000);
            return () => clearTimeout(timer);
        }, [token, user]);
        return <div>Please log in to view your courses.</div>;
    }
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={false} /> 
                <BreadcrumbThree title="Subscribed Course" subtitle="My Courses" />
              {!isLoading  && <CourseTwoArea courses={courses_list || []} lst={true}/>}
             <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;