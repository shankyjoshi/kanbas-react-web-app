import { createSlice } from "@reduxjs/toolkit";
import db from "../Database";

const initialState = {
  courses: db.courses,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, action) => {
      const newCourses = [
        ...state.courses,
        { ...action.payload, _id: new Date().getTime().toString() },
      ];
      state.courses = newCourses;
    },
    deleteCourse: (state, action) => {
      const newCourses = state.courses.filter(
        (course) => course._id !== action.payload
      );
      state.courses = newCourses;
    },
    updateCourse: (state, action) => {
      const newCourses = state.courses.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      state.courses = newCourses;
    },
  },
});

export const { addCourse, deleteCourse, updateCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
