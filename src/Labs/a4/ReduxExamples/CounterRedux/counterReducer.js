import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    incrementBy(state, action) {
      state.count += action.payload;
    },
    decrementBy(state, action) {
      state.count -= action.payload;
    },
  },
});

export const { increment, decrement, incrementBy, decrementBy } =
  counterSlice.actions;
export default counterSlice.reducer;
