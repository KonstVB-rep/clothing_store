import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data";

const initialState = {
  productsList: storeData,
  filteredProducts: [],
  favoritesProducts: [],
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
    toggleFavorite: (state, action) => {
      const isExist = state.favoritesProducts.some((prod) => {
        return (
          prod.id === action.payload.id &&
          prod.size === action.payload.size &&
          prod.color === action.payload.color
        );
      });
      if (!isExist) {
        state.favoritesProducts.push(action.payload);
      } else {
        const idx = state.favoritesProducts.findIndex((prod) => {
          return (
            prod.id === action.payload.id &&
            prod.size === action.payload.size &&
            prod.color === action.payload.color
          );
        });
        state.favoritesProducts.splice(idx, 1);
      }
    },
  },
});

export const { filteredProducts, getSingleProduct, toggleFavorite } =
  productsSlice.actions;
export const selectFilteredProducts = (state) =>
  state.products.filteredProducts;
export const selectError = (state) => state.products.error;
export const selectSingleProduct = (state) => state.products.singleProduct[0];
export const selectFavorites = (state) => state.products.favoritesProducts;

const productsReducer = productsSlice.reducer;

export default productsReducer;
