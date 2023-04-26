import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  amount: 0,
  totalAmount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: {
      reducer: (state, action) => {
        console.log(action.payload);
        state.amount += 1;
        let product = state.cart.find(
          (prod) =>
            prod.id === action.payload.id &&
            prod.size === action.payload.size &&
            prod.color === action.payload.color
        );
        if (product) {
          product.amount += 1;
        } else {
          product = action.payload;
          state.cart.push(product);
        }
        product.totalPrice += product.price;
        state.totalPrice += product.price;
      },
      prepare: (data) => {
        return {
          payload: {
            ...data,
            amount: 1,
            totalPrice: 0,
          },
        };
      },
    },
    removeFromCart: (state, action) => {
      console.log(action.payload);
      state.amount -= state.amount > 0 ? 1 : 0;
      const idx = state.cart.findIndex((prod) => {
        return (
          prod.id === action.payload.id &&
          prod.size === action.payload.size &&
          prod.color === action.payload.color
        );
      });
      console.log(idx);
      const product = state.cart[idx];

      console.log(product);

      if (product) {
        product.amount = product.amount > 0 ? (product.amount -= 1) : 0;
        state.totalPrice -= state.totalPrice > 0 ? product.price : 0;
        product.totalPrice -= product.totalPrice > 0 ? product.price : 0;
      }

      if (product.amount < 1) {
        state.cart.splice(idx, 1);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// export const selectTotalPriceProduct = (id, size, color) => (state) => {
//   let product = state.cart.find(
//     (prod) => prod.id === id && product.size === size && product.color === color
//   );
//   return product.totalPrice;
// };
export const selectTotalAmount = (state) => state.cart.amount;

const cartReducer = cartSlice.reducer;

export default cartReducer;
