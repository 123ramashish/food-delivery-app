import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SignupSuccess: (state, action) => {
      state.error = null;
    },
    SignupFailure: (state, action) => {
      state.error = action.payload;
    },
    SigninSuccess: (state, action) => {
      state.currentUser = action.payload;

      state.error = null;
    },
    SigninFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { SignupSuccess, SignupFailure, SigninSuccess, SigninFailure } =
  userSlice.actions;

export default userSlice.reducer;
