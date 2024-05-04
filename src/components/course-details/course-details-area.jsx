import React from 'react';
import CourseDetailsSidebar from '../common/sidebar/course-details-sidebar';
import CommentFormCourse from '../forms/comment-form-course';
import SingleComment from './single-comment';
import SingleProgressbar from './single-progressbar';

const CourseDetailsArea = ({ id, course, start=true }) => {

//   const { course_desc, course_desc_2, learn_list, course_desc_3, curriculum_desc, course_lessons, instructor_img, instructor_title, instructor_desc, social_links, reviews, instructor, rating, rating_count } = course || {};
const {short_desc,
     createdAt,
     updatedAt,
     publishedAt,
     locale,
     course_outline,
     duration,
     rating_count:rate_c,
     language,
     certificate,
     quizes,
     level,
     short_desc_2,
     short_desc_3,
     course_learn_lists,courses_instructors,
     course_target_groups,course_qualification_equirements,courses_weekly_curricula,weekly_curriculum_intro,course_reviews,course_ratings}=course
  return (
        <section className="edu-section-gap course-details-area">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-8">
                        <div className="course-details-content">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview"
                                    type="button"  aria-controls="overview" aria-selected="true">Overview</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="carriculam-tab" data-bs-toggle="tab" data-bs-target="#carriculam"
                                    type="button" role="tab" aria-controls="carriculam" aria-selected="false">Carriculam</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="instructor-tab" data-bs-toggle="tab" data-bs-target="#instructor"
                                    type="button" role="tab" aria-controls="instructor" aria-selected="false">Instructor</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button"
                                    role="tab" aria-controls="review" aria-selected="false">Reviews</button>
                                </li>
                            </ul>

                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                                    <div className="course-tab-content">
                                        <div className="course-overview">
                                            <h3 className="heading-title">Course Description</h3>
                                            <p>{short_desc}</p>
                                            {short_desc_2 && <p className="mb--60">{short_desc_2}</p>}
                                            <h5 className="title">What You’ll Learn?</h5>
                                            <ul className="mb--60">
                                                {course_learn_lists?.data?.map(({attributes,id}) => <li key={id}>{attributes?.learn_list_name}</li>)}
                                            </ul>
                                            {short_desc_3 && <p>{short_desc_3}</p>}
                                            <h3 className="heading-title" data-sal-delay="150" data-sal-duration="100">Requirements</h3>
                                <ul className="mb--90" data-sal-delay="10" data-sal-duration="100">
                                    {course_qualification_equirements && course_qualification_equirements.data.map(({id,attributes}) =>
                                    <li key={id}>{attributes?.qualification_name}</li>)}
                                </ul>

                                <h3 className="heading-title" data-sal-delay="10" data-sal-duration="100">Target Audience</h3>
                                <ul className="mb--90" data-sal-delay="10" data-sal-duration="100">
                                    {course_target_groups && course_target_groups?.data?.map(({id,attributes}) => <li key={id}>{attributes?.target_group_name}</li>)}
                                </ul>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="carriculam" role="tabpanel" aria-labelledby="carriculam-tab">
                                    <div className="course-tab-content">
                                        <div className="course-curriculam">
                                            <h3 className="heading-title">Course Curriculum</h3>
                                            <p>{weekly_curriculum_intro}</p>
                                            {courses_weekly_curricula?.data.map(({attributes,id,curriculum_reg}) => (
                                                <div key={`${curriculum_reg}${id}`} className="text mt-2 p-2" style={{border:"1px grey solid"}}>
                                                    <h5 className="title">{attributes?.curriculum_title}</h5>
                                                    <p>{attributes?.curriculum_desc}</p>
                                                    <ul>
                                                        {/* {attributes?.curriculum_lesson_headers?.data?.map(({attributes, id}) => (
                                                            <li key={id}>
                                                                {attributes.curriculum_lesson_header_title && 
                                                                    <div className="text">
                                                                        <i className="icon-65"></i>
                                                                        {attributes.curriculum_lesson_header_title}
                                                                    </div>
                                                                }

                                                              
                                                                    <div className="icon">
                                                                        <i className={list?.icon}></i>
                                                                    </div>
                                                               
                                                            </li>
                                                        ))} */}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor-tab">
                                    <div className="course-tab-content">
                                        {courses_instructors?.data?.map(({id,attributes}) =>
                                        <div className="course-instructor" key={id}>
                                            <div className="thumbnail">
                                                <img src={`http://localhost:1337${attributes?.instructor_img?.data?.attributes?.formats?.thumbnail?.url}`} alt="team images" />
                                            </div>
                                            <div className="author-content">
                                                <h6 className="title">{attributes?.instructor_name}</h6>
                                                <span className="subtitle">{attributes?.instructor_title}</span>
                                                <p>{attributes?.instructor_desc}</p>
                                                <p>{attributes?.country}</p>
                                                <ul className="social-share">
                                                    <li>{attributes?.instructor_email}</li>
                                                    <li>{attributes?.contact}</li>
                                                </ul>
                                                <ul className="social-share">
                                                   
                                                        <li >
                                                            <a href={attributes?.instructor_linkedIn} target='_blank'>
                                                                <i className='icon-linkedin2'></i>
                                                            </a>
                                                        </li>
                                                        <li >
                                                            <a href={attributes?.instructor_fb} target='_blank'>
                                                                <i className='icon-facebook'></i>
                                                            </a>
                                                        </li>
                                                        <li >
                                                            <a href={attributes?.instructor_x} target='_blank'>
                                                                <i className='icon-twitter'></i>
                                                            </a>
                                                            
                                                        </li>
                                                        <li >
                                                            <a href={attributes?.instructor_youtube} target='_blank'>
                                                                <i className='icon-youtube'></i>
                                                            </a>
                                                        </li>
                                                  
                                                </ul>
                                            </div>
                                        </div>
                                )}
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                                    <div className="course-tab-content">
                                        <div className="course-review">
                                            <h3 className="heading-title">Course Rating</h3>
                                            <p>{course_ratings?.data?.length} average rating based on {course_ratings?.data?.length} rating</p>
                                            <div className="row g-0 align-items-center">
                                                <div className="col-sm-4">
                                                    <div className="rating-box">
                                                        <div className="rating-number">{course_ratings?.data?.length}</div>
                                                        <div className="rating">
                                                            <i className="icon-23"></i>
                                                            <i className="icon-23"></i>
                                                            <i className="icon-23"></i>
                                                            <i className="icon-23"></i>
                                                            <i className="icon-23"></i>
                                                        </div>
                                                        <span>({course_ratings?.data?.length} Review)</span>
                                                    </div>
                                                </div>
                                                <div className="col-sm-8">
                                                    <div className="review-wrapper">
                                                   { course_ratings?.data?.map(({id,attributes}) =>
                                                <SingleProgressbar key={id} value={'100'} rating_value={attributes?.rating * 10} />)}
                                                        
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="comment-area">
                                                <h3 className="heading-title">Reviews</h3>
                                                <div className="comment-list-wrapper">
                                                    {course_reviews.data?.map(({id,attributes}) => (
                                                        <SingleComment key={id} review={attributes} />
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="comment-form-area">
                                                <h3 className="heading-title">Write a Review</h3>
                                                <div className="rating-icon">
                                                    <h6 className="title">Rating Here</h6>
                                                    <div className="rating">
                                                        <i className="icon-23"></i>
                                                        <i className="icon-23"></i>
                                                        <i className="icon-23"></i>
                                                        <i className="icon-23"></i>
                                                        <i className="icon-23"></i>
                                                    </div>
                                                </div>
                                                <CommentFormCourse/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <CourseDetailsSidebar id={id} course={course} start={start} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseDetailsArea;