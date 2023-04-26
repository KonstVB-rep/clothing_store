import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data";

const initialState = {
  productsList: storeData,
  filteredProducts: [],
  // JSON.parse(localStorage.getItem("filteredProducts")) || storeData,
  singleProduct: [],
  error: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filteredProducts: (state, action) => {
      state.filteredProducts = state.productsList.filter(
        (product) => product.type === action.payload
      );
      state.error = false;
    },
    getSingleProduct: (state, action) => {
      state.singleProduct = state.productsList.filter(
        (prod) => prod.id === action.payload
      );
    },
  },
});

export const { filteredProducts, getSingleProduct } = productsSlice.actions;
export const selectFilteredProducts = (state) =>
  state.products.filteredProducts;
export const selectError = (state) => state.products.error;
export const selectSingleProduct = (state) => state.products.singleProduct[0];

const productsReducer = productsSlice.reducer;

export default productsReducer;
