// src/services/publicClient.js
import axios from "axios";
import { apiServer } from "../utils/envVariable";

export const publicClient = axios.create({
  baseURL: apiServer,
  headers: {
    Accept: "application/json",
  },
});