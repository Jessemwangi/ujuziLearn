import { useQuery } from "react-query";
import { COURSES_SERVICES } from "../services/courses-service";

 const useGetAllWkCourseData = (q) => {
    const { data: all_wk_curri_list, isLoading } = useQuery(
        ["courses-all-weekly_curriculum"],
        () => COURSES_SERVICES.getAllWkCurriculum(q).then((data) => {
            const course_data =data?.data;

            return course_data;
        }),
        {
            refetchOnWindowFocus: false,
        }
    );

    return { all_wk_curri_list, isLoading };
};

export default useGetAllWkCourseData