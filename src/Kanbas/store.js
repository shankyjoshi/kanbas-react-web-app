import { configureStore } from "@reduxjs/toolkit";
import assignmentsReducer from "./Courses/Assignments/assignmentsReducer";

const store = configureStore({
  reducer: {
    assignmentsReducer,
  },
});

export default store;
