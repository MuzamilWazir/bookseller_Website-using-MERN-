import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./features/cards/cartSlice";

export const store = configureStore({
  reducer: { cart: cartReducer },
});
