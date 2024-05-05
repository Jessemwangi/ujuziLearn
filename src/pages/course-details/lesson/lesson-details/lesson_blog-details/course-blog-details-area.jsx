import React from 'react';
import BlogSidebar from '../../../../../components/blog/blog-sidebar';
import CommentArea from './comment-area';
import DOMPurify from 'dompurify';

const CourseBlogDetailsArea = ({lessons, title}) => {
    const {
        curriculum_lesson_desc,
        curriculum_lesson_title,
        curriculum_lesson_reg,
        intro_pic,
        curriculum_lesson_headers,
        createdAt,
        id,
    }=lessons || {};
    return (
        <div className="blog-details-area section-gap-equal">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-8">
                        <div className="blog-details-content">
                            <div className="entry-content">
                                <span className="category">Experiential learning</span>
                                <h3 className="title">{ curriculum_lesson_title}</h3>
                                <ul className="blog-meta">
                                    <li><i className="icon-27"></i>{createdAt}</li>
                                    <li><i className="icon-28"></i> Topics {curriculum_lesson_headers?.data?.length}</li>
                                </ul>
                                <div className="thumbnail">
                                    <img src={intro_pic?.data?.attributes?.url} alt="intro Image" />
                                </div>
                            </div>

                            <blockquote>
                                <p>{curriculum_lesson_desc}</p>
                                {/* <h5 className="author">verified</h5> */}
                            </blockquote>
{curriculum_lesson_headers?.data?.map(({attributes,id}) =>
<>
<h3 className="title">{attributes?.curriculum_lesson_header_title}</h3>
<p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(attributes?.course_curriculum_lesson_header_content) }}></p>

                          {attributes?.content_img?.data &&  <div className="features-image">
                                <div className="row g-md-5">
                                    <div className="col-12">
                                        <div className="thumbnail">
                                            <img src={attributes?.content_img.attributes?.url} alt="Features Images" />
                                        <p>image description will be here</p>
                                        </div>
                                    </div>
                                </div>
                            </div>}

                            {attributes?.content_2 && <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(attributes?.content_2) }}></p>}
</>
)}
                            <div className="blog-share-area">
                                <div className="row align-items-center">
                                    <div className="col-md-7">
                                        <div className="blog-tags">
                                            <h6 className="title">Tags:</h6>
                                            <div className="tag-list">
                                                <a href="#">Language</a>
                                                <a href="#">eLearn</a>
                                                <a href="#">Tips</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-5">
                                        <div className="blog-share">
                                            <h6 className="title">Share on:</h6>
                                            <ul className="social-share icon-transparent">
                                                <li>
                                                    <a href="#"><i className="icon-facebook"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="icon-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="icon-instagram"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="blog-pagination">
                            <div className="row g-5">
                                <div className="col-lg-6">
                                    <div className="blog-pagination-list prev-post">
                                        <a href="#">
                                            <i className="icon-west"></i>
                                            <span>Instructional Design and Adult Learners</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="blog-pagination-list next-post">
                                        <a href="#">
                                            <span>Qualification for Students Satisfaction Rate</span>
                                            <i className="icon-east"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Start Comment Area  */}
                        <CommentArea />
                        {/*  End Comment Area  */}
                        <div className="comment-form-area">
                            <h3 className="heading-title">Leave Your Comment Here</h3>
                            {/* form start */}
                            {/* <BlogCommentForm /> */}
                            {/* form end */}
                        </div>
                    </div>

                    <div className="col-lg-4">
                        {/* sidebar start */}
                        <BlogSidebar id={id} />
                        {/* sidebar end */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseBlogDetailsArea;