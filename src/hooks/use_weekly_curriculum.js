import { useQuery } from "react-query";
import { COURSES_SERVICES } from "../services/courses-service";

const useGetAllWkCourseData = (q) => {
  const {
    data: all_wk_curri_list,
    isLoading,
    isError,
    error
  } = useQuery(
    ["courses-all-weekly_curriculum", q],
    () => COURSES_SERVICES.getAllWkCurriculum(q).then((res) => res?.data),
    {
      refetchOnWindowFocus: false,
    }
  );

  return { all_wk_curri_list, isLoading, isError, error };
};

export default useGetAllWkCourseData;
