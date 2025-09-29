import Link from "next/link";
import React, { useEffect, useState } from "react";
import { blog_data } from "../../data";
import { getLocalStorage } from "../../utils/localstorage";
import { useSingleWkCourseData } from "../../hooks/use-course_weekly_curi";
import { QUERY_STRINGS } from "../../queries/endpoints";
import Image from "next/image";

const latest_blog = blog_data.slice(0, 3);
const LESSONS_PER_PAGE = 10;

const BlogSidebar = ({ id, courseLessons,documentId }) => {
  const [course_, setCourse] = useState({});
  const [displayedLessons, setDisplayedLessons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const lessons = courseLessons;
  useEffect(() => {
    const LST_course = getLocalStorage("course");
    if (LST_course) {
      setCourse(LST_course);
    }
  }, []);

  useEffect(() => {
    if (lessons && lessons.length > 0) {
      // Initialize with first page of lessons
      setDisplayedLessons(lessons.slice(0, LESSONS_PER_PAGE));
      setCurrentPage(1);
    }
  }, [lessons]);

  const handleLoadMore = () => {
    if (!lessons) return;

    setIsLoadingMore(true);

    setTimeout(() => {
      const nextPage = currentPage + 1;
      const startIndex = (nextPage - 1) * LESSONS_PER_PAGE;
      const endIndex = startIndex + LESSONS_PER_PAGE;

      if (startIndex >= lessons.length) {
        // Reset to show first 10 lessons again
        setDisplayedLessons(lessons.slice(0, LESSONS_PER_PAGE));
        setCurrentPage(1);
      } else {
        // Show next 10 lessons (replace current ones)
        const newLessons = lessons.slice(startIndex, endIndex);
        setDisplayedLessons(newLessons);
        setCurrentPage(nextPage);
      }

      setIsLoadingMore(false);
    }, 500);
  };

  // Always show load more button (for looping functionality)
  const totalLessons = lessons ? lessons.length : 0;
  const hasMoreLessons = lessons && lessons.length > LESSONS_PER_PAGE;
  const totalPages = Math.ceil(totalLessons / LESSONS_PER_PAGE);
  const currentStartIndex = (currentPage - 1) * LESSONS_PER_PAGE + 1;
  const currentEndIndex = Math.min(
    currentPage * LESSONS_PER_PAGE,
    totalLessons
  );

  return (
    <div className="edu-blog-sidebar">
      <div className="edu-blog-widget widget-search">
        <div className="inner">
          <div className="header-btn">
            {lessons && (
              <Link
                href={`/course-details/lesson/${course_.id}?docId=${course_.docId}`}
                className="edu-btn btn-medium btn-rounded"
              >
                back to lessons <i className="icon-1"></i>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="edu-blog-widget widget-latest-post">
        <div className="inner">
          <div
            className="widget-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h4 className="widget-title">Course Units</h4>
            {totalLessons > 0 && (
              <span
                className="lesson-count"
                style={{
                  fontSize: "14px",
                  color: "#666",
                  backgroundColor: "#f5f5f5",
                  padding: "4px 8px",
                  borderRadius: "12px",
                }}
              >
                {currentStartIndex}-{currentEndIndex} of {totalLessons}
              </span>
            )}
          </div>

          <div className="content latest-post-list">
            {displayedLessons.length > 0 ? (
              displayedLessons.map((lesson, index) => (
                <div
                  key={lesson.documentId}
                  className="latest-post"
                  style={{
                    display: "flex",
                    alignItems: "flex-start", // Aligns items to the top
                    gap: "15px",
                    marginBottom: "20px",
                  }}
                >
                  {/* === COLUMN 1: Image and Number === */}
                  <div style={{ flexShrink: 0 }}>
                    <div className="thumbnail">
                      <Link
                        href={`/course-details/lesson/lesson-details/${lesson.documentId}`}
                      >
                        <Image
                          src={lesson.intro_pic.url} 
                          alt={lesson.curriculum_lesson_title || "Lesson Image"}
                          width={100}
                          height={75}
                          style={{
                            objectFit: "cover",
                            borderRadius: "5px",
                            display: "block", 
                          }}
                        />
                      </Link>
                    </div>

                   
                    <div
                      className="lesson-number"
                      style={{
                        marginTop: "8px",
                        backgroundColor: "#f0f0f0",
                        color: "#555",
                        borderRadius: "11px",
                        padding: "2px 8px",
                        fontSize: "12px",
                        fontWeight: "600",
                        display: "inline-block", // Ensures the background fits the text
                      }}
                    >
                       #{(currentPage - 1) * LESSONS_PER_PAGE + index + 1}
                    </div>
                  </div>

                  {/* === COLUMN 2: Post Content === */}
                  <div className="post-content">
                    <h6 className="title">
                      <Link
                        href={`/course-details/lesson/lesson-details/${lesson.documentId}`}
                        style={{ textDecoration: "none" }}
                      >
                        {lesson?.curriculum_lesson_title?.length > 40
                          ? `${lesson.curriculum_lesson_title.substring(
                              0,
                              40
                            )}...`
                          : lesson.curriculum_lesson_title}
                      </Link>
                    </h6>
                    <ul className="blog-meta">
                      <li>
                        <i className="icon-27"></i>
                        {new Date(lesson?.publishedAt).toLocaleDateString()}
                      </li>
                    </ul>
                  </div>
                </div>
              ))
            ) : (
              <div
                className="no-lessons"
                style={{
                  textAlign: "center",
                  padding: "20px",
                  color: "#666",
                }}
              >
                No lessons available
              </div>
            )}

            {hasMoreLessons && (
              <div
                className="load-more-container"
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  paddingTop: "15px",
                  borderTop: "1px solid #e0e0e0",
                }}
              >
                <button
                  onClick={handleLoadMore}
                  disabled={isLoadingMore}
                  className="load-more-btn"
                  style={{
                    backgroundColor: isLoadingMore ? "#ccc" : "#007bff",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: isLoadingMore ? "not-allowed" : "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    if (!isLoadingMore) {
                      e.target.style.backgroundColor = "#0056b3";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isLoadingMore) {
                      e.target.style.backgroundColor = "#007bff";
                    }
                  }}
                >
                  {isLoadingMore ? (
                    <>
                      <span style={{ marginRight: "8px" }}>⟳</span>
                      Loading...
                    </>
                  ) : currentPage >= totalPages ? (
                    <>🔄 Back to First 10</>
                  ) : (
                    <>
                      Next 10 → (Page {currentPage + 1}/{totalPages})
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

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
  );
};

export default BlogSidebar;
