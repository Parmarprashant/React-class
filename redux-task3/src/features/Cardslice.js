import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "Welcome to this page!",
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    changeMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { changeMessage } = cardSlice.actions;
export default cardSlice.reducer;
