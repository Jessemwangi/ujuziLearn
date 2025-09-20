import React, { useEffect, useState } from 'react';
import CourseBlogDetailsArea from './course-blog-details-area';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import { Footer, Header } from '../../layout';
import { QUERY_STRINGS } from '../../queries/endpoints';
import useGetAllWkCourseData from '../../hooks/use_weekly_curriculum';

const index = ({lessons, title, docId}) => {
   
    const q = `populate=intro_pic&populate=course_lessons&courses=${docId}`;
  
    const { all_wk_curri_list, isLoading } = useGetAllWkCourseData(q);
    const [courseLessons, setCourseLessons] = useState([]);

 useEffect(() => {
    if (!isLoading && all_wk_curri_list) {
        const lessonsWithPicUrl = all_wk_curri_list.flatMap((curriculum) => {
            const imageUrl = curriculum.intro_pic?.url;

            return (curriculum.course_lessons || []).map((lesson) => ({
                ...lesson, // Copy all original lesson properties
                intro_pic: imageUrl, // Add just the URL from the parent
            }));
        });
        
        setCourseLessons(lessonsWithPicUrl);
    }
}, [isLoading, all_wk_curri_list]);

   
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <BreadcrumbThree title={title} subtitle={title} />
                <CourseBlogDetailsArea
                lessons={lessons}
                courseLessons={courseLessons}/>
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;