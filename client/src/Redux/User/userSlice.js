import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SignupSuccess: (state) => {
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
    SignOutSuccess: (state) => {
      state.error = null;
      state.currentUser = null;
    },
    SignOutFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  SignupSuccess,
  SignupFailure,
  SigninSuccess,
  SigninFailure,
  SignOutSuccess,
  SignOutFailure,
} = userSlice.actions;

export default userSlice.reducer;
