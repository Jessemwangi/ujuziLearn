import { createAsyncThunk } from '@reduxjs/toolkit';
import { TokenService } from './token';
import httpClient from './http-client';

export const fetchCourses = createAsyncThunk(
    'course/fetchCourses',
    async (endpoint, thunkAPI) => {
      try {
        if (TokenService.hasToken()) {
          const response = await httpClient.get(endpoint);
          if (response.status === 400) {
            return thunkAPI.rejectWithValue(response);
          }
          return response.data.data;
        } else {
          return thunkAPI.rejectWithValue({message: 'invalid token session'});
        }
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );

  export const fetchCourse = createAsyncThunk(
    'course/fetchCourse',
    async (endpoint, thunkAPI) => {
      try {
        if (TokenService.hasToken()) {
          const response = await httpClient.get(endpoint);
          if (response.status === 400) {
            return thunkAPI.rejectWithValue(response);
          }
          return response.data.data;
        } else {
          return thunkAPI.rejectWithValue({message: 'invalid token session'});
        }
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
