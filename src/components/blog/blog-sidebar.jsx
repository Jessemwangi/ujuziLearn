import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { blog_data } from '../../data';
import { getLocalStorage } from '../../utils/localstorage';
import {useSingleWkCourseData} from '../../hooks/use-course_weekly_curi';
import { QUERY_STRINGS } from '../../queries/endpoints';

const latest_blog = blog_data.slice(0, 3);

const BlogSidebar = ({id, lessons}) => {
    const [course_, setCourse] = useState({});

    useEffect(() => {
      const LST_course = getLocalStorage('course');
      if (LST_course) {
        setCourse(LST_course);
      }
    }, []);
    const { wk_curri_list, isLoading } = useSingleWkCourseData(id,QUERY_STRINGS.courses.video_pic_curriculum_list_only);
    return (
        <div className="edu-blog-sidebar">
            <div className="edu-blog-widget widget-search">
                <div className="inner">
                <div className="header-btn">
                                        <Link href={`/course-details/lesson/${course_?.id}`}>
                                            <a className="edu-btn btn-medium btn-rounded">back to lessons <i className="icon-1"></i></a>
                                        </Link>
                                    </div>
                </div>
            </div>

            <div className="edu-blog-widget widget-latest-post">
                <div className="inner">
                    <h4 className="widget-title">More Course Units</h4>
                    <div className="content latest-post-list">
                        {lessons && lessons?.map((blog) => (
                            <div key={blog.id} className="latest-post">
                                <div className="thumbnail">
                                    <Link href={`/blog-details/${blog.id}`}>
                                        <a>
                                            <img src={blog.img} alt="Blog Images" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <h6 className="title">
                                        <Link href={`/blog-details/${blog.id}`}>
                                            <a>{blog.curriculum_lesson_title.substring(0, 25)}...</a>
                                        </Link>
                                    </h6>
                                    <ul className="blog-meta">
                                        <li><i className="icon-27"></i>{blog?.publishedAt}</li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* <div className="edu-blog-widget widget-categories">
                <div className="inner">
                    <h4 className="widget-title">Archives</h4>
                    <div className="content">
                        <ul className="category-list">
                            <li><a href="#">2017 Nevember <span>(3)</span></a></li>
                            <li><a href="#">2018 December <span>(7)</span></a></li>
                            <li><a href="#">2019 January<span>(2)</span></a></li>
                            <li><a href="#">2020 February <span>(1)</span></a></li>
                            <li><a href="#">2021 March <span>(3)</span></a></li>
                        </ul>
                    </div>
                </div>
            </div> */}

            <div className="edu-blog-widget widget-tags">
                <div className="inner">
                    <h4 className="widget-title">Tags</h4>
                    <div className="content">
                        <div className="tag-list">
                            <a href="#">Language</a>
                            <a href="#">eLearn</a>
                            <a href="#">Tips</a>
                            <a href="#">Course</a>
                            <a href="#">Motivation</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSidebar;