import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  slide: 0,
  length: 4,
};

export const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    nextSlide: (state, action) => {
      state.slide = action.payload > state.length - 1 ? 0 : action.payload;
    },
    prevSlide: (state, action) => {
      state.slide = action.payload < 0 ? state.length - 1 : action.payload;
    },
    dotSlide: (state, action) => {
      state.slide = action.payload;
    },
  },
});

export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;

export const selectCurrentSlide = (state) => state.slider.slide;
const sliderReducer = sliderSlice.reducer;
export default sliderReducer;
