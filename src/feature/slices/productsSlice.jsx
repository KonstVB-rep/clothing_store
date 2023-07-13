import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data";

const initialState = {
  productsList: storeData,
  filteredProductsType: [],
  favoritesProducts: [],
  singleProduct: [],
  filters: {},
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProductProps: (state, action) => {
      state.filters[action.payload.prop] = action.payload.value;
    },
    filteredProductsType: (state, action) => {
      state.filteredProductsType = state.productsList.filter(
        (product) => product.type === action.payload
      );
    },
    clearFilter: (state) => {
      state.filters = {};
    },
    clearFavoritesList: (state) => {
      state.favoritesProducts = [];
    },
    sortByPrice: (state, action) => {
      if (action.payload === "asc") {
        state.filteredProductsType.sort((a, b) => a.price - b.price);
      } else {
        state.filteredProductsType.sort((a, b) => b.price - a.price);
      }
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

export const {
  filteredProductsType,
  getSingleProduct,
  toggleFavorite,
  filterProductProps,
  sortByPrice,
  clearFilter,
  clearFavoritesList,
} = productsSlice.actions;

export const selectSingleProduct = (state) => state.products.singleProduct[0];
export const selectFavorites = (state) => state.products.favoritesProducts;
export const selectFilters = (state) => state.products.filters;

export const filteredProductByProps = (state) =>
  state.products.filteredProductsType.filter((item) => {
    for (let key in state.products.filters) {
      if (key && !item[key].includes(state.products.filters[key])) {
        return false;
      }
    }
    return true;
  });

const productsReducer = productsSlice.reducer;

export default productsReducer;
