import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  food: null,
  error: null,
};

export const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    FoodSuccess: (state, action) => {
      state.food = action.payload;
      state.error = null;
    },
    FoodFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { FoodSuccess, FoodFailure } = foodSlice.actions;

export default foodSlice.reducer;
