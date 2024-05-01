import axios from "axios";
import { TokenService } from "./token";
import { server } from "../utils/envVariable";

const URL = server || 'http://localhost:1337/api';

const httpClient = axios.create({
  baseURL: URL,
  // timeout: 5000,
  headers: {
    Accept: "application/json",
  },
});

httpClient.interceptors.request.use(
  (config) => {
    const token = TokenService.getToken();
    if (token) {
      if (config.headers) {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (res) => res,
  function axios(err) {
    if (
      err?.response?.status === 401 ||
      err?.response?.data?.message?.toLowerCase() === "jwt malformed"
    ) {
      // throw error
    }

    return Promise.reject(err);
  }
);

export default httpClient;
