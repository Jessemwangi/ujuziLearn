import { useQuery } from 'react-query';
import { COURSES_SERVICES, server_url } from '../services/courses-service';
import { COURSES_ENDPOINT, QUERY_STRINGS } from '../queries/endpoints';
import axios from 'axios';
import { publicClient } from '../services/publicClient';
import httpClient from '../services/http-client';

export const useCoursesData = () => {

    const { data: courses_list, isLoading } = useQuery(
        ["courses-all"],
        () => COURSES_SERVICES.getAllCourses(QUERY_STRINGS.courses.all.url).then((data) => {
            const courses_data = data?.data;

            return courses_data;
        }),
        {
            refetchOnWindowFocus: false,
        }
    );

    return { courses_list, isLoading };

};
export const usePublicCourses = () => {
  //fetch public courses
  const { data: courses_list, isLoading } = useQuery(
    ["Public-all-courses"],
    async () => {
        const url = `${server_url}${COURSES_ENDPOINT}?${QUERY_STRINGS.courses.all.url}`
        console.log(url);
      const response = await httpClient.get(url, { public: true });
      return response.data.data; 
    },
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

