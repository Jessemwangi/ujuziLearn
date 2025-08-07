import React, { useEffect, useState } from 'react';
import CourseBlogDetailsArea from './course-blog-details-area';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import { Footer, Header } from '../../layout';
import { QUERY_STRINGS } from '../../queries/endpoints';
import useGetAllWkCourseData from '../../hooks/use_weekly_curriculum';


const index = ({lessons, title, course_Id}) => {
    const q = `populate=course_lessons&filters[courses]=${course_Id}`;
    const { all_wk_curri_list, isLoading } = useGetAllWkCourseData(q);
    const [courseLessons,setCourseLessons] = useState([]);

    useEffect(() =>{
            if (!isLoading) {
                const lessons = all_wk_curri_list?.flatMap(({id,attributes}) => {
                 const list =attributes?.course_lessons?.data.map(({id,attributes}) =>{
return {id,...attributes}
             } );
                 return list;
            });
                
                setCourseLessons(lessons);
            }
    },[isLoading])
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