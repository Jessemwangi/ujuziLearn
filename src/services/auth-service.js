import { APP_ENVS } from "../utils/appVars";
import httpClient from "./http-client";
const basePath = `${APP_ENVS.baseURL}/auth/github/callback`;
const loginUrl = `${APP_ENVS.baseURL}/auth/local`;
const registerUrl = `${APP_ENVS.baseURL}/auth/local/register`;
const forgotPasswordUrl = `${APP_ENVS.baseURL}/auth/forgot-password`;
const resetPasswordUrl = `${APP_ENVS.baseURL}/auth/reset-password`;

export const AUTH_SERVICES = {
  async githubCallback(query) {
    const response = await httpClient.get(`${basePath}?${query}`);
    return response?.data;
  },

  async login(data) {
    const res = await httpClient.post(loginUrl, data);
    return res?.data;
  },

  async register(data) {
    const res = await httpClient.post(registerUrl, data);
    return res?.data;
  },

  async sendResetPassword(data) {
    const res = await httpClient.post(forgotPasswordUrl, data);
    return res?.data;
  },
  async resetPassword(data) {
    const res = await httpClient.post(resetPasswordUrl, data);
    return res?.data;
  },
};
