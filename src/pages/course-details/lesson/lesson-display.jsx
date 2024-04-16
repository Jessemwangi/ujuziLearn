import React from 'react';
import SingleProgressbar from '../../../components/course-details/single-progressbar';
import SingleComment from '../../../components/course-details/single-comment';
import SingleAccordion from './single-accordion';
import CourseDetailsSidebar from '../../../components/common/sidebar/course-details-sidebar';
import CourseDetailsSidebarNoStart, { lessons } from '../../../components/common/sidebar/course-details-sidebar-no-start-button';
import HeaderContentAccordion from './headerContentAccordion';
import LessonListsAccordion from './LessonListsAccordion';


const LessonDisplay = ({ course }) => {
  const { course_desc, course_desc_2, learn_list, course_desc_3, curriculum_desc, course_lessons, instructor_img, instructor_title, instructor_desc, social_links, reviews, instructor, rating, rating_count,title } = course || {};
  
    return (
        <section className="edu-section-gap course-details-area">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-8">
                        <div className="course-details-content course-details-2">
                            <div className="course-overview">
                                <h3 className="heading-title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">About This Course</h3>
                                <p data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">{course_desc}</p>
                                <p data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">{course_desc_2}</p>
                            </div>

                            <div className="course-curriculam mb--90">
                                <h3 className="heading-title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">{title}</h3>
                                <p data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua.</p>
                                <div className="accordion edu-accordion" id="accordionExample" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
<LessonListsAccordion lesson={lessons}/>
                                    {/* <SingleAccordion show={true} id="1" title="Course Introduction" desc={[
                                        { title: 'Introduction', icon: 'icon-68', lesson: 'electricity is good for life', },
                                         { title: 'Course Overview', icon: 'icon-68', lesson: 'electricity is good for life', },
                                        { title: 'Course Overview', icon: 'icon-68', lesson: 'electricity is good for life',},
                                        { title: 'Course Exercise / Reference Files', icon: 'icon-68', lesson: 'electricity is good for life', },
                                        { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
                                        { title: 'Embedding PHP in HTML', icon: 'icon-68' }
                                    ]} />
                                    <HeaderContentAccordion id="2" title="JavaScript Language Basics" desc={[
                                        { title: 'Introduction', icon: 'icon-68', lesson: `Parallel circuits offer flexibility in system design, allowing for the
                                        addition or removal of components without affecting the operation of other components.
                                        This adaptability makes parallel circuits suitable for a wide range of applications in
                                        electronics, electrical engineering, and power distribution systems.`, },
                                        { title: 'Course Overview', icon: 'icon-68' ,lesson:`How does current flow in a parallel circuit, and what distinguishes this from both a simple
                                        circuit and a series circuit?`},
                                        { title: 'Course Overview',lesson:`Consider and describe two real-world scenarios where parallel circuits are employed,
                                        providing explanations for their utilization.` },
                                        { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
                                        { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
                                        { title: 'Embedding PHP in HTML', icon: 'icon-68' }
                                    ]} />
                                    <SingleAccordion id="3" title="Components & Databinding" desc={[
                                        { title: 'Introduction', icon: 'icon-68' },
                                        { title: 'Course Overview', icon: 'icon-68' },
                                        { title: 'Course Overview', badge_list: true, question: 4, minutes: 15 },
                                        { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
                                        { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
                                        { title: 'Embedding PHP in HTML', icon: 'icon-68' }
                                    ]} />
                                    <SingleAccordion id="4" title="Product Management Leadership" desc={[
                                        { title: 'Introduction', icon: 'icon-68' },
                                        { title: 'Course Overview', icon: 'icon-68' },
                                        { title: 'Course Overview', badge_list: true, question: 6, minutes: 18 },
                                        { title: 'Course Exercise / Reference Files', icon: 'icon-68' },
                                        { title: 'Code Editor Installation (Optional if you have one)', icon: 'icon-68' },
                                        { title: 'Embedding PHP in HTML', icon: 'icon-68' }
                                    ]} /> */}
                                </div>
                            </div>

                            <div className="course-instructor-wrap mb--90" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <h3 className="heading-title">Your Instructors</h3>
                                <div className="course-instructor">
                                    <div className="thumbnail">
                                        <img src={`/assets/images/team/team-02/${instructor_img}`} alt="team images" />
                                    </div>

                                    <div className="author-content">
                                        <h6 className="title">{instructor}</h6>
                                        <span className="subtitle">{instructor_title}</span>
                                        <p>{instructor_desc}</p>
                                        <ul className="social-share">
                                            {social_links?.map((social, i) => (
                                                <li key={i}>
                                                    <a href={social.link} target={social.target ? social.target : ''}>
                                                        <i className={social.icon}></i>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="course-review" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <h3 className="heading-title">Student Feedback</h3>
                                <p>{rating} average rating based on {rating_count} rating</p>
                                <div className="row g-0 align-items-center">
                                    <div className="col-sm-4">
                                        <div className="rating-box">
                                            <div className="rating-number">{rating}</div>
                                            <div className="rating">
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                            </div>
                                            <span>({rating_count} Review)</span>
                                        </div>
                                    </div>

                                    <div className="col-lg-8">
                                        <div className="review-wrapper">
                                            <SingleProgressbar value={'100'} rating_value={rating_count} />
                                            <SingleProgressbar value={'0'} rating_value={'0'} />
                                            <SingleProgressbar value={'0'} rating_value={'0'} />
                                            <SingleProgressbar value={'0'} rating_value={'0'} />
                                            <SingleProgressbar value={'0'} rating_value={'0'} />
                                        </div>
                                    </div>
                                </div>

                                <div className="comment-area">
                                    <h3 className="heading-title">Reviews</h3>
                                    <div className="comment-list-wrapper">
                                        {reviews?.map((review, i) => (
                                            <SingleComment key={i} review={review} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <CourseDetailsSidebarNoStart course={course} details_2={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LessonDisplay;