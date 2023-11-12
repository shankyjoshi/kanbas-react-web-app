import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    addCourse: (state, action) => {
      const newCourses = [...state.courses, action.payload];
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

export const { addCourse, deleteCourse, updateCourse, setCourses } =
  coursesSlice.actions;
export default coursesSlice.reducer;
