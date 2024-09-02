import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  error: null,
  totalPrice: 0,
  notification: 0,
};

export const cartSlice = createSlice({
  name: "cart",

  initialState,
  reducers: {
    CartSuccess: (state, action) => {
      const { id, name, price, imageUrl } = action.payload;
      const foundIndex = state.cart.findIndex((item) => item.id === id);

      if (foundIndex === -1) {
        state.cart.push({ id, name, price, imageUrl, quantity: 1 });
        state.error = null;
      } else {
        state.cart[foundIndex].quantity += 1;
        state.error = null;
      }
    },
    CartFailure: (state, action) => {
      //   state.error = action.payload;
    },
    IncreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const foundIndex = state.cart.findIndex((item) => item.id === id);
      if (foundIndex !== -1) {
        state.cart[foundIndex].quantity += 1;
      }
    },
    DecreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const foundIndex = state.cart.findIndex((item) => item.id === id);
      if (foundIndex !== -1) {
        if (state.cart[foundIndex].quantity === 1) {
          state.cart.splice(foundIndex, 1);
        } else {
          state.cart[foundIndex].quantity -= 1;
        }
      }
    },
    CalculateTotalPrice: (state) => {
      state.totalPrice = state.cart.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
      state.cart.map((item) => {
        state.notification += item.quantity;
      });
    },
  },
});

export const {
  CartSuccess,
  CartFailure,
  IncreaseQuantity,
  DecreaseQuantity,
  CalculateTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
