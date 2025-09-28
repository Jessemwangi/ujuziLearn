import { createAsyncThunk } from "@reduxjs/toolkit";
import { TokenService } from "./token";
import httpClient from "./http-client";

export const fetchCourses = createAsyncThunk(
  "course/fetchCourses",
  async (endpoint, thunkAPI) => {
    try {
      if (TokenService.hasToken()) {
        const response = await httpClient.get(endpoint);
        if (response.status === 400) {
          return thunkAPI.rejectWithValue(response);
        }
        return response.data.data;
      } else {
        return thunkAPI.rejectWithValue({ message: "invalid token session" });
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchCourse = createAsyncThunk(
  "course/fetchCourse",
  async (endpoint, thunkAPI) => {
    try {
      // Token bypass for public access (adjust for production)
      const tokenBypass = true;

      if (tokenBypass || TokenService.hasToken()) {
        const response = await httpClient.get(endpoint, { public: true });
        // Handle known error status
        if (response.status === 400) {
          return thunkAPI.rejectWithValue({
            status: 400,
            message: response?.data?.error?.message || "Bad Request",
            raw: response,
          });
        }

        // Success: return course data
        return response.data.data;
      } else {
        // Token missing or invalid
        return thunkAPI.rejectWithValue({
          status: 401,
          message: "Invalid Token or Authentication required",
          raw: error,
        });
      }
    } catch (error) {
      // Normalize error payload
      const normalizedError = {
        status: error?.response?.status || 500,
        message:
          error?.response?.data?.error?.message ||
          error?.message ||
          "Unexpected error occurred",
        raw: error,
      };

      return thunkAPI.rejectWithValue(normalizedError);
    }
  }
);

export const fetchSecureCourse = createAsyncThunk(
  "course/fetchSecureCourse",
  async (endpoint, thunkAPI) => {
    try {
      // Token bypass for public access (adjust for production)
      if (TokenService.hasToken()) {
        const response = await httpClient.get(endpoint);
        // Handle known error status
        if (response.status === 400) {
          return thunkAPI.rejectWithValue({
            status: 400,
            message: response?.data?.error?.message || "Bad Request",
            raw: response,
          });
        }

        // Success: return course data
        return response.data.data.course;
      } else {
        // Token missing or invalid
        return thunkAPI.rejectWithValue({
          status: 401,
          message: "Invalid Token or Authentication required",
          raw: error,
        });
      }
    } catch (error) {
      // Normalize error payload
      const normalizedError = {
        status: error?.response?.status || 500,
        message:
          error?.response?.data?.error?.message ||
          error?.message ||
          "Unexpected error occurred",
        raw: error,
      };

      return thunkAPI.rejectWithValue(normalizedError);
    }
  }
);
