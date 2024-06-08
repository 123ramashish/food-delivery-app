import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice";
import foodSlice from "./Food/foodSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    food: foodSlice,
  },
});
export default store;
