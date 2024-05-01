import axios from "axios";
import { APP_ENVS } from "../utils/appVars";
import httpClient from "./http-client";
const basePath2 = `${APP_ENVS.baseURL}/project-teches`;
const basePath = `${APP_ENVS.baseURL}/projects`;
const categories = `${APP_ENVS.baseURL}/project-categories`;
const subCategories = `${APP_ENVS.baseURL}/project-sub-categories`;
const techProjects = `${APP_ENVS.baseURL}/techprojects`;
const apply = `${APP_ENVS.baseURL}/project-applications`;
// const token =
//   "b6ce8e7c79f88e90bf93593c62de5df2d9ada0298b682a86f121e2dfd51608de6734c1df09c543f0f14fb387d823d67c6a650dc00bf6a8bb120b73b1d3fc0a16fbf419accb7d7e70fd434ec538b6670c1ec7b0b9307d0621b1a8f3c7425786d586dccee83701cbe1247b8fcbc5c115d831eb96928f1dec56a4a4556be60ad966";

export const PROJECT_SERVICES = {
  async getAll(query) {
    const res = await httpClient.get(`${basePath}?${query}`);

    return res?.data;
  },
  async getAllTechProjects(query) {
    const res = await axios.get(`${techProjects}?${query}`, {
      // headers: {
      //   Authorization: `Bearer ${token}` ,
      // },
    });

    return res?.data;
  },
  async getAllCategories() {
    const res = await httpClient.get(`${categories}`);
    return res?.data;
  },

  async getAllSubCategories() {
    const res = await httpClient.get(`${subCategories}`);
    return res?.data;
  },

  async getAllTechCategories() {
    const res = await httpClient.get(
      `${basePath2}?filters[name][$in]=React&filters[name][$in]=Django&filters[name][$in]=PostgreSQL&filters[name][$in]=React%20Native&filters[name][$in]=Adobe%20XD&filters[name][$in]=TensorFlow&filters[name][$in]=Pandas&filters[name][$in]=C%23&filters[name][$in]=Python&filters[name][$in]=Node`
    );
    return res?.data;
  },

  async getProjectDetails(id) {
    const res = await axios.get(`${techProjects}/${id}`);
    return res?.data;
  },

  async apply(data) {
    const res = await httpClient.post(`${apply}`, { data });
    return res?.data;
  },
};
