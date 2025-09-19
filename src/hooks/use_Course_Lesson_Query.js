import { useQuery } from 'react-query';
import { COURSES_SERVICES } from '../services/courses-service';

const useCourseLessonData = (id,q) => {
    const { 
        data: courses_list, 
        isLoading, 
        isError, // Add this
        error,   // And this
    } = useQuery(
        ["courses-lessons", id],
        () => COURSES_SERVICES.getSingleLesson(id,q).then((data) => {
            const course_data = {
                ...data?.data,
            };
            return course_data;
        }),
        {
            refetchOnWindowFocus: false,
        }
    );

    return { courses_list, isLoading, isError, error }; // Return them here
};

export default useCourseLessonData;