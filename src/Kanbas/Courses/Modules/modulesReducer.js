import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
  modules: db.modules,
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, action) => {
      const newModules = [
        ...state.modules,
        { ...action.payload, _id: new Date().getTime().toString() },
      ];
      state.modules = newModules;
    },
    deleteModule: (state, action) => {
      const newModules = state.modules.filter(
        (module) => module._id !== action.payload
      );
      state.modules = newModules;
    },
    updateModule: (state, action) => {
      const newModules = state.modules.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      state.modules = newModules;
    },
  },
});

export const { addModule, deleteModule, updateModule } = modulesSlice.actions;
export default modulesSlice.reducer;
