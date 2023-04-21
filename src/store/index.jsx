import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../feature/slices/sliderSlice";
import productsReducer from "../feature/slices/productsSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productsReducer,
  },
});
