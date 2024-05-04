import { useQuery } from 'react-query';
import { COURSES_SERVICES } from '../services/courses-service';

const useCourseLessonData = (id,q) => {
    const { data: courses_list, isLoading } = useQuery(
        ["courses-lessons",id],
        () => COURSES_SERVICES.getSingleCourse(id,q).then((data) => {
            const course_data = {
                id: data?.data?.id,
                ...data?.data?.attributes,
            };

            return course_data;
        }),
        {
            refetchOnWindowFocus: false,
        }
    );

    return { courses_list, isLoading };
};

export default useCourseLessonData;
