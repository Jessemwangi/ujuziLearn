import { Footer, Header } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import CourseTwoArea from './course-2-area';
import {usePublicCourses} from '../../hooks/useCoursesQuery';
import SectionLoader from '../../ui/SectionLoader';

const index = () => {
  const { courses_list, isLoading } = usePublicCourses();

    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={false} />
                <BreadcrumbThree title="All Course" subtitle="All Courses" />
                  {isLoading  && <SectionLoader/>}
              {!isLoading  && <CourseTwoArea courses={courses_list || []}/>} 
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;