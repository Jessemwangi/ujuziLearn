import { useQuery } from 'react-query';
import { COURSES_SERVICES } from '../services/courses-service';

const useCoursesData = () => {
    const q = `populate=courses_subcategories&populate=courses_weekly_curricula.course_lessons.curriculum_lesson_headers&populate=courses_categories&populate=courses_instructors.instructor_img&populate=course_intro_video&populate=course_intro_img&populate=course_target_groups&populate=course_learn_lists&populate=course_qualification_equirements
    &populate=subscription_packages&populate=course_reviews&populate=courses_features&populate=localizations&populate=course_ratings`;

    const { data: courses_list, isLoading } = useQuery(
        ["courses-all"],
        () => COURSES_SERVICES.getAllCourses(q).then((data) => {
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

export default useCoursesData;
