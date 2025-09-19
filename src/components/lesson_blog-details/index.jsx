import React, { useEffect, useState } from 'react';
import CourseBlogDetailsArea from './course-blog-details-area';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import { Footer, Header } from '../../layout';
import { QUERY_STRINGS } from '../../queries/endpoints';
import useGetAllWkCourseData from '../../hooks/use_weekly_curriculum';

const index = ({lessons, title, course_Id, docId}) => {
   
    const q = `populate=course_lessons&courses=${docId}`;
    console.log('Query :', q);
    const { all_wk_curri_list, isLoading } = useGetAllWkCourseData(q);
    const [courseLessons, setCourseLessons] = useState([]);

    console.log('all_wk_curri_list :', all_wk_curri_list);

    useEffect(() => {
        if (!isLoading && all_wk_curri_list) {
            // Extract all course_lessons from all curricula
            const lessons = all_wk_curri_list.flatMap((curriculum) => {
                // Each curriculum has a course_lessons array
                return curriculum.course_lessons || [];
            });
            
            setCourseLessons(lessons);
        }
    }, [isLoading, all_wk_curri_list]);
    
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <BreadcrumbThree title={title} subtitle={title} />
                <CourseBlogDetailsArea lessons={lessons} title={title} courseLessons={courseLessons}/>
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;