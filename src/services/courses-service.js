import axios from "axios";

import httpClient from "./http-client";
import { server } from "../utils/envVariable"; // ... /api
const endpoint  = '/courses'
export const server_url = server || `http://localhost:1337/api`
// const token =
//   "b6ce8e7c79f88e90bf93593c62de5df2d9ada0298b682a86f121e2dfd51608de6734c1df09c543f0f14fb387d823d67c6a650dc00bf6a8bb120b73b1d3fc0a16fbf419accb7d7e70fd434ec538b6670c1ec7b0b9307d0621b1a8f3c7425786d586dccee83701cbe1247b8fcbc5c115d831eb96928f1dec56a4a4556be60ad966";

export const COURSES_SERVICES= {
  async getAllCourses(query) {
    console.log(server)
    const res = await httpClient.get(`${server_url}${endpoint}?${query}`);

    return res?.data;
  },
  async getSingleCourse(query) {
    const res = await httpClient.get(`${server}${endpoint}?${query}`);

    return res?.data;
  },
  async getUserCourseList(query) {
    const res = await httpClient.get(`${server}${endpoint}?${query}`);
    return res?.data;
  },

  async getCourserBySubCategories() {
    const res = await httpClient.get(`${server}${endpoint}?${query}`);
    return res?.data;
  },

  async getCoursesByCategories() {
    const res = await httpClient.get(`${server}${endpoint}?${query}`);
    return res?.data;
  },
};
