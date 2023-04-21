import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data";

const initialState = {
  filteredProducts:
    JSON.parse(localStorage.getItem("filteredProducts")) || storeData,
  singleProduct: [],
  error: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filteredProducts(state, action) {
      try {
        const currentTypeProducts = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filteredProducts = currentTypeProducts;
        state.error = false;
        localStorage.setItem(
          "filteredProducts",
          JSON.stringify(currentTypeProducts)
        );
      } catch (err) {
        state.error = err;
      }
    },
  },
});

export const { filteredProducts } = productsSlice.actions;
export const selectFilteredProducts = (state) =>
  state.products.filteredProducts;
export const selectError = (state) => state.products.error;

const productsReducer = productsSlice.reducer;

export default productsReducer;
