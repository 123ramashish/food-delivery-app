import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  error: null,
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
      state.error = action.payload;
    },
  },
});

export const { CartSuccess, CartFailure } = cartSlice.actions;

export default cartSlice.reducer;
