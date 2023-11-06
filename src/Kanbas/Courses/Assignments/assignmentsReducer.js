import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, action) => {
      const newAssignments = [
        ...state.assignments,
        { ...action.payload, _id: new Date().getTime().toString() },
      ];
      state.assignments = newAssignments;
    },
    deleteAssignment: (state, action) => {
      const newAssignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
      state.assignments = newAssignments;
    },
    updateAssignment: (state, action) => {
      const newAssignments = state.assignments.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      state.assignments = newAssignments;
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignments,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
