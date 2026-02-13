import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../features/Cardslice";

export const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});
