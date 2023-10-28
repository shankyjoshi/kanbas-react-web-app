import { configureStore } from "@reduxjs/toolkit";
import assignmentsReducer from "./Courses/Assignments/assignmentsReducer";
import coursesReducer from "./Dashboard/coursesReducer";
import modulesReducer from "./Courses/Modules/modulesReducer";
const store = configureStore({
  reducer: {
    assignmentsReducer,
    coursesReducer,
    modulesReducer,
  },
});

export default store;
