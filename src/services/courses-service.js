import httpClient from "./http-client";
import { BASE_URL, COURSES_ENDPOINT, COURSES_LESSON, COURSES_WK_CURRICULUM, QUERY_STRINGS } from "../queries/endpoints";
const endpoint  = COURSES_ENDPOINT
export const server_url = BASE_URL
// const token =
//   "b6ce8e7c79f88e90bf93593c62de5df2d9ada0298b682a86f121e2dfd51608de6734c1df09c543f0f14fb387d823d67c6a650dc00bf6a8bb120b73b1d3fc0a16fbf419accb7d7e70fd434ec538b6670c1ec7b0b9307d0621b1a8f3c7425786d586dccee83701cbe1247b8fcbc5c115d831eb96928f1dec56a4a4556be60ad966";

export const COURSES_SERVICES= {
  //query here is the student id
    async getSubscibedCourses(query) {
    const res = await httpClient.get(`${server_url}/${QUERY_STRINGS.courses.subscribed.url}/${query}`);

    return res?.data;
  },
  async getAllCourses(query) {
    const res = await httpClient.get(`${server_url}${endpoint}?${query}`);

    return res?.data;
  },
  async getSingleCourses(id,query) {
    const res = await httpClient.get(`${server_url}${endpoint}/${id}?${query}`);

    return res?.data;
  },
  async getAllWkCurriculum(query){
    const res = await httpClient.get(`${server_url}${COURSES_WK_CURRICULUM}?${query}`);

    return res?.data;
  },
  async getSingleWkCurriculum(id, query){
    const res = await httpClient.get(`${server_url}${COURSES_WK_CURRICULUM}/${id}?${query}`);

    return res?.data;
  },
  async getSingleLesson(id, query) {
    const res = await httpClient.get(`${server_url}${COURSES_LESSON}/${id}?${query}`);

    return res?.data;
  },
  async getUserCourseList(query) {
    const res = await httpClient.get(`${server_url}${endpoint}?${query}`);
    return res?.data;
  },

  async getCourserBySubCategories() {
    const res = await httpClient.get(`${server_url}${endpoint}?${query}`);
    return res?.data;
  },

  async getCoursesByCategories() {
    const res = await httpClient.get(`${server_url}${endpoint}?${query}`);
    return res?.data;
  },
};
