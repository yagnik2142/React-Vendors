import { createReducer } from "@reduxjs/toolkit";

export const coursesReducer = createReducer(
  {},
  {
    // Action types for getting all courses
    getAllCoursesRequest: (state) => {
      state.loading = true;
    },
    getAllCoursesSuccess: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    },
    getAllCoursesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action types for getting course info
    getCourseInfoRequest: (state) => {
      state.loading = true;
    },
    getCourseInfoSuccess: (state, action) => {
      state.loading = false;
      state.courseInfo = action.payload;
      state.error = null;
    },
    getCourseInfoFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action types for adding a course
    addCourseRequest: (state) => {
      state.loading = true;
    },
    addCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action types for updating a course
    updateCourseRequest: (state) => {
      state.loading = true;
    },
    updateCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action types for deleting a course
    deleteCourseRequest: (state) => {
      state.loading = true;
    },
    deleteCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action types for clearing errors and messages
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
