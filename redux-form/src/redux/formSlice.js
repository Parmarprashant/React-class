import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    submitForm: (state) => {
      console.log("Form Submitted:", state);
    },
  },
});

export const { updateField, submitForm } = formSlice.actions;
export default formSlice.reducer;
