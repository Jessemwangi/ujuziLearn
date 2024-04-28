import { APP_ENVS } from "../utils/appVars";
import httpClient from "./http-client";
const userBasePath = `${APP_ENVS.baseURL}`;
const bookDemo = `${APP_ENVS.baseURL}/business-connects`;

export const COMMON_SERVICE = {
  async uploadFile(file) {
    const formData = new FormData();
    formData.append("files", file);

    const data = await httpClient.post(`${userBasePath}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data?.data;
  },

  async bookDemo(data) {
    const res = await httpClient.post(bookDemo, { data });
    return res?.data;
  },
};
