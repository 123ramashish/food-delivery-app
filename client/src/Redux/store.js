import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice";
import foodSlice from "./Food/foodSlice";
import cartSlice from "./Cart/cartSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    food: foodSlice,
    cart: cartSlice,
  },
});
export default store;
