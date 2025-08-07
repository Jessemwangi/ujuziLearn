import { useQuery } from 'react-query';
import { COURSES_SERVICES } from '../services/courses-service';
import { QUERY_STRINGS } from '../queries/endpoints';

const useCoursesData = () => {

    const { data: courses_list, isLoading } = useQuery(
        ["courses-all"],
        () => COURSES_SERVICES.getAllCourses(QUERY_STRINGS.courses.all.url).then((data) => {
            const courses_data = data?.data?.map((x) => ({
                id: x.id,
                ...x?.attributes,
                // lessons: x?.attributes?.course_lessons,
                // carriculum: x?.attributes?.courses_weekly_curricula
            }));

            return courses_data;
        }),
        {
            refetchOnWindowFocus: false,
        }
    );

    return { courses_list, isLoading };
};

export const useSubscribedCourses = (studentId) => {

   try {
     const { data: courses_list, isLoading } = useQuery(
         ["courses-Subscribed"],
         () => COURSES_SERVICES.getSubscibedCourses(studentId).then((data) => {
            
 
                 const courses_data =data.data.courses
            
 
             return courses_data;
         }),
         {
             refetchOnWindowFocus: false,
         }
     );
 
     return { courses_list, isLoading };
   } catch (error) {
    throw new Error(error.message || "Error Fetching Courses");
    
   }
};
export default useCoursesData;
