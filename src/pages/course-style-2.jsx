import SEO from '../components/seo';
import { Wrapper } from '../layout';
import CourseStyleTwoMain from '../components/course-style-2';

const CourseStyleTwo = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Available Courses'} />
            <CourseStyleTwoMain />
        </Wrapper>
    )
}

export default CourseStyleTwo;