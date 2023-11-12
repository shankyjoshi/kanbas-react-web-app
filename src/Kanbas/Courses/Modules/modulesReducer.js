import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modules: [],
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action) => {
      state.modules = action.payload;
    },
    addModule: (state, action) => {
      const newModules = [...state.modules, { ...action.payload }];
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

export const { addModule, deleteModule, updateModule, setModules } =
  modulesSlice.actions;
export default modulesSlice.reducer;
