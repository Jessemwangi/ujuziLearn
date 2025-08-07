
import SingleComment from '../single-comment';
import CommentFormCourse from '../../forms/comment-form-course';
import SingleProgressbar from '../single-progressbar';

const CourseReviews = ({ ratings, reviews }) => {
  return (
    <div className="course-tab-content">
      <div className="course-review">
        <h3 className="heading-title">Course Rating</h3>
        <p>{ratings?.data?.length} average rating based on {ratings?.data?.length} ratings</p>
        <div className="row g-0 align-items-center">
          <div className="col-sm-4">
            <div className="rating-box">
              <div className="rating-number">{ratings?.data?.length}</div>
              <div className="rating">
                {[...Array(5)].map((_, i) => <i key={i} className="icon-23"></i>)}
              </div>
              <span>({ratings?.data?.length} Review)</span>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="review-wrapper">
              {ratings?.data?.map(({ id, attributes }) => (
                <SingleProgressbar key={id} value={'100'} rating_value={attributes?.rating * 10} />
              ))}
            </div>
          </div>
        </div>

        <div className="comment-area">
          <h3 className="heading-title">Reviews</h3>
          <div className="comment-list-wrapper">
            {reviews?.data?.map(({ id, attributes }) => (
              <SingleComment key={id} review={attributes} />
            ))}
          </div>
        </div>

        <div className="comment-form-area">
          <h3 className="heading-title">Write a Review</h3>
          <div className="rating-icon">
            <h6 className="title">Rating Here</h6>
            <div className="rating">
              {[...Array(5)].map((_, i) => <i key={i} className="icon-23"></i>)}
            </div>
          </div>
          <CommentFormCourse />
        </div>
      </div>
    </div>
  );
};

export default CourseReviews;
