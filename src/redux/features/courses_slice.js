import { createSlice } from "@reduxjs/toolkit";
import { fetchCourse, fetchCourses } from "../../services/course_redux_thunk";

const initialState = {
    courses: [],
    course: {},
    error: {},
    status: 'idle', // Add a status field to handle the loading state
};

 const coursesSlice = createSlice ({
    name: 'courses',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourses.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCourses.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.courses = action.payload;
                state.error = {};
            })
            .addCase(fetchCourses.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(fetchCourse.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCourse.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.course = action.payload;
                state.error = {};
            })
            .addCase(fetchCourse.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            // Find the course in the state and update it
            // .addCase(updateCourse.fulfilled, (state, action) => {
            //     const index = state.courses.findIndex(course => course.id === action.payload.id);
            //     if (index !== -1) {
            //         state.courses[index] = action.payload;
            //     }
            // });
    },
});

export const selectCourses = (state) => state.courses.courses;
export const selectCourse = (state) => state.courses.course;
export const selectCourseStatus = (state) => state.courses.status;
export const selectCourseError = (state) => state.courses.error;
export default coursesSlice.reducer;