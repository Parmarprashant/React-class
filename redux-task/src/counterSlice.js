import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    addByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, addByAmount } = counterSlice.actions;
export default counterSlice.reducer;
