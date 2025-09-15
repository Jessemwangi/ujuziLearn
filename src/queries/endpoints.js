import { apiServer } from "../utils/envVariable";

const BASE_URL = apiServer;

const COURSES_ENDPOINT = "/courses";
const COURSES_LESSON = '/crs-cur-lessons';
const COURSES_WK_CURRICULUM = '/courses-weekly-curriculums'
const USERS_ENDPOINT = "/users";
const LOGIN_ENDPOINT = "/login";

const QUERY_STRINGS = {
    courses:{
                subscribed:{
            desc:'get all courses the student can access',
            url:`students/courses`
    },
        all:{
            desc:'get all courses and related data in them, can also be used to get single course info',
            url:`populate[courses_subcategories]=true&populate[courses_weekly_curricula][populate][course_lessons][populate][curriculum_lesson_headers]=true&populate[courses_categories]=true&populate[courses_instructors][populate][instructor_img]=true&populate[course_learn_lists]=true&populate[course_qualification_equirements]=true&populate[course_intro_video]=true&populate[course_intro_img]=true&populate[course_target_groups][populate]=*&populate[subscription_packages]=true&populate[course_reviews]=true&populate[courses_features]=true&populate[localizations]=true`
    },
    lessonList:{
        desc:'get only the lesson minimal data',
        url:'populate=curriculum_lesson_headers&populate=curriculum_lesson_headers.content_img&populate=courses_weekly_curricula&populate=intro_pic'
    },
    all_curriculum_list_populate:{
        desc:'populate all next layer',
        url:'populate=*'
    },
    weekly_curriculum_from_root_course:{
        desc:'get courses and weekly curriculum only',
        url:'populate=courses_weekly_curricula.course_lessons'
    },
    all_curriculum_list:{
        desc:'',
        url:''
    },
    video_pic_curriculum_list_only:{
    desc:'get video and pic',
    url:'populate=course_lessons&populate=intro_pic'
},
}
};

export {
  BASE_URL,
  COURSES_ENDPOINT,
  USERS_ENDPOINT,
  LOGIN_ENDPOINT,
  QUERY_STRINGS,
  COURSES_LESSON,
  COURSES_WK_CURRICULUM,
};