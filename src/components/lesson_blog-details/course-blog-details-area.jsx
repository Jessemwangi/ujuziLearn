import React, { useState } from 'react';
import BlogSidebar from '../blog/blog-sidebar';
import CommentArea from './comment-area';
import DOMPurify from 'dompurify';
import Link from 'next/link';
import MarkoutOutPut from '../../ui/markoutOutPut';
import VideoModal from '../common/popup-modal/video-modal';
import useModal from '../../hooks/use-modal';
import { extractVideoCode } from '../../utils/extractVideoIdFromUrl';

const CourseBlogDetailsArea = ({lessons, courseLessons}) => {
    const { isVideoOpen, setIsVideoOpen } = useModal();
    const [video_url,setVideo_url] = useState()
    const {
        curriculum_lesson_desc,
        curriculum_lesson_title,
        curriculum_lesson_reg,
        intro_pic,
        curriculum_lesson_headers,
        createdAt,
        id,
        documentId
    }=lessons || {};
   console.log('CourseBlogDetailsArea Rendered', courseLessons);
    return (
        <>
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
                                    <li><i className="icon-28"></i> Topics {curriculum_lesson_headers?.length}</li>
                                </ul>
                              {intro_pic?.url &&  <div className="thumbnail">
                                    <img src={intro_pic?.url} alt="intro Image" />
                                </div>}
                            </div>

                            <blockquote>
                                <p>{curriculum_lesson_desc}</p>
                                {/* <h5 className="author">verified</h5> */}
                            </blockquote>
{curriculum_lesson_headers?.map(({curriculum_lesson_header_title,
id,course_curriculum_lesson_header_content,content_img,content_2
,video_url,
}) =>
<div key={id}>
<h3 className="title">{curriculum_lesson_header_title}</h3>
    <div>
    <MarkoutOutPut content={course_curriculum_lesson_header_content} />
    </div>

                          {content_img &&  <div className="features-image">
                                <div className="row g-md-5">
                                    <div className="col-12">
                                        <div className="thumbnail">
                                            <img src={content_img.url} alt="Features Images" />
                                        <p>{content_img.caption}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>}

                            {content_2 &&   
                            <MarkoutOutPut content={content_2} />}
                            {/* //display video if available */}

                          {video_url && 
                                  <div className="edu-course-widget widget-course-summery col-5">
                                  <div className="inner">
                          <div className="thumbnail">
              <img
                src={content_img?.url || 'https://res.cloudinary.com/dk4ruyonq/image/upload/v1715297668/video_Thumb_d8700518fc.png'}
                alt="Watch Video"
                width={100}
              />
              <a
                onClick={() => {
                    setVideo_url(video_url)
                    setIsVideoOpen(true)
                }
                }
                style={{ cursor: "pointer" }}
                className="play-btn video-popup-activation"
              >
                <i className="icon-18"></i>
              </a>
            </div>
            </div></div>
}
</div>


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
                            <div className="row g-5" style={{marginBottom:"20px"}}>
                            {courseLessons && (
  <div className="row">
    {(() => {
      // Find the current lesson index
      const currentIndex = courseLessons.findIndex((lesson) => lesson.id === id);

      // Get the previous and next lessons based on the index
      const prevLesson = courseLessons[currentIndex - 1];
      const nextLesson = courseLessons[currentIndex + 1];

      return (
        <>
          {/* Previous Lesson Button */}
          {prevLesson && (
            <div className="col-lg-6">
              <div className="blog-pagination-list prev-post">
                <Link href={`/course-details/lesson/lesson-details/${prevLesson.id}`}>
                 
                    <i className="icon-west"></i>
                    <span>{prevLesson.curriculum_lesson_title || "Previous Lesson"}</span>
                  
                </Link>
              </div>
            </div>
          )}

          {/* Next Lesson Button */}
          {nextLesson && (
            <div className="col-lg-6">
              <div className="blog-pagination-list next-post">
                <Link href={`/course-details/lesson/lesson-details/${nextLesson.id}`}>
                 
                    <i className="icon-east"></i>
                    <span>{nextLesson.curriculum_lesson_title || "Next Lesson"}</span>
                  
                </Link>
              </div>
            </div>
          )}
        </>
      );
    })()}
  </div>
)}


                            </div>
                        </div>

                        {/*  Start Comment Area  */}
                        {/* <CommentArea /> to work on it later */}
                        {/*  End Comment Area  */}
                        {/* <div className="comment-form-area">
                            <h3 className="heading-title">Leave Your Comment Here</h3> */}
                            {/* form start */}
                            {/* <BlogCommentForm /> */}
                            {/* form end */}
                        {/* </div> */}
                    </div>

                    <div className="col-lg-4">
                        {/* sidebar start */}
                        <BlogSidebar id={id} lessons={courseLessons} />
                        {/* sidebar end */}
                    </div>
                </div>
            </div>
        </div>
        {
            <VideoModal 
            isVideoOpen ={isVideoOpen}
            setIsVideoOpen ={setIsVideoOpen}
            videoId={extractVideoCode(video_url)}
            />
        }
        </>
    )
}

export default CourseBlogDetailsArea;