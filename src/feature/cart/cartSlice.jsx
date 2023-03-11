import { createSlice } from "@reduxjs/toolkit";
import CartItems from "../../cartItems";

const initialState = {
  cratItems: CartItems,
  amount: 2,
  total: 90,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cratItems = [];
    },
    removeItem: (state, action) => {
      console.log(action);
    },
  },
});

console.log(cartSlice);

export const { clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
