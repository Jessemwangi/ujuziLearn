import axios from "axios";
import { TokenService } from "./token";
import { apiServer } from "../utils/envVariable";

const URL = apiServer;

const httpClient = axios.create({
  baseURL: URL,
  // timeout: 5000,
  headers: {
    Accept: "application/json",
  },
});

httpClient.interceptors.request.use(
  (config) => {
    const token = `cf2a59fa219393f01b6ce8c9d2c9bff281e17e41433a20006132d1e8e9af2465e641804d5db404af485865de99bee3da13cb048f1803e86b71ed9fd71c1eb8201ebccff8dee2b23e3e5b12041d52afc3bda6bb975c303c5813760f3d03b5ba2ea8eb80f6d0dff06b2c8803a7a3ca35451f1ff73331ee477f0d3566e4da6d7c4e`;
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
