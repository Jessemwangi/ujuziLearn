import { useQuery } from 'react-query';
import { COURSES_SERVICES } from '../services/courses-service';

export const useSingleWkCourseData = (id,q) => {
    const { data: wk_curri_list, isLoading } = useQuery(
        ["courses-weekly_curriculum",id],
        () => COURSES_SERVICES.getSingleWkCurriculum(id,q).then((data) => {
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

    return { wk_curri_list, isLoading };
};

export default useSingleWkCourseData;