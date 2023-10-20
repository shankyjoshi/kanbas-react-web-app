import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "Hello World",
};

const helloSlice = createSlice({
  name: "hello", // a string name for the slice
  initialState, // the initial value for the state
  reducers: {}, // an object with reducer functions as properties
});

export default helloSlice.reducer;
