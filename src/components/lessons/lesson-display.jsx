import React from 'react';
import SingleProgressbar from '../course-details/single-progressbar';
import SingleComment from '../course-details/single-comment';
import CourseDetailsSidebarNoStart from '../common/sidebar/course-details-sidebar-no-start-button';
import LessonListsAccordion from './LessonListsAccordion';


const LessonDisplay = ({ course }) => {
  const {id,attributes} = course
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
    course_name,
    short_desc_2,
    short_desc_3,
    course_learn_lists,courses_instructors,
    course_target_groups,course_qualification_equirements,
    courses_weekly_curricula,weekly_curriculum_intro,course_reviews,course_ratings} = attributes
    return (
        <section className="edu-section-gap course-details-area">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-8">
                        <div className="course-details-content course-details-2">
                            <div className="course-overview">
                                <h3 className="heading-title" data-sal-delay="150" data-sal-duration="800">About This Course</h3>
                                <p data-sal-delay="150" data-sal-duration="800">{short_desc}</p>
                                <p data-sal-delay="150" data-sal-duration="800">{short_desc_2}</p>
                                <p data-sal-delay="150" data-sal-duration="800">{short_desc_3}</p>
                            </div>

                            <div className="course-curriculam mb--90">
                                <h3 className="heading-title" data-sal-delay="150" data-sal-duration="800">Start Learning</h3>
                                <p data-sal-delay="150" data-sal-duration="800">{weekly_curriculum_intro}</p>
                                <div className="accordion edu-accordion" id="accordionExample" data-sal-delay="150"  data-sal-duration="800">
<LessonListsAccordion weekly_curriculum={courses_weekly_curricula?.data}/>
                                    {/* <SingleAccordion show={true} id="1" title="Course Introduction" desc={[
                                        { title: 'Introduction', icon: 'icon-68', lesson: 'electricity is good for life', },
                                         { title: 'Course Overview', icon: 'icon-68', lesson: 'electricity is good for life', },
                                        { title: 'Course Overview', icon: 'icon-68', lesson: 'electricity is good for life',},
                                        { title: 'Course Exercise / Reference Files', icon: 'icon-68', lesson: 'electricity is good for life', },
                                        { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
                                        { title: 'Embedding PHP in HTML', icon: 'icon-68' }
                                    ]} />
 */}
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

                            <div className="course-review" data-sal-delay="150"  data-sal-duration="800">
                                <h3 className="heading-title">Student Feedback</h3>
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

                                    <div className="col-lg-8">
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
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <CourseDetailsSidebarNoStart  lessons={courses_weekly_curricula?.data} course={attributes} details_2={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LessonDisplay;





