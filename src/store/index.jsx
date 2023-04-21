import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../feature/slices/sliderSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
  },
});
