import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  error: null,
};

export const foodSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    CartSuccess: (state, action) => {
      state.cart.push(action.payload);
      state.error = null;
    },
    CartFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { CartSuccess, CartFailure } = cartSlice.actions;

export default cartSlice.reducer;
