const BASE_URL = process.env.REACT_APP_SERVER_API_URL || 'https://ujuziapi.onrender.com/api';

const COURSES_ENDPOINT = "/courses";
const COURSES_LESSON = '/crs-cur-lessons';
const COURSES_WK_CURRICULUM = '/courses-weekly-curriculums'
const USERS_ENDPOINT = "/users";
const LOGIN_ENDPOINT = "/login";

const QUERY_STRINGS = {
    courses:{
        all:{
            desc:'get all courses and related data in them, can also be used to get single course info',
            url:`populate=courses_subcategories&populate=courses_weekly_curricula.course_lessons.
            curriculum_lesson_headers&populate=courses_categories&populate=courses_instructors.
            instructor_img&populate=course_intro_video&populate=course_intro_img&populate=course_target_groups
            &populate=course_learn_lists&populate=course_qualification_equirements&populate=
            subscription_packages&populate=course_reviews&populate=courses_features&populate=localizations`
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