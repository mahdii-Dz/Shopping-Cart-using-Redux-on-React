import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart(state, action) {
      // Check if the item already exists in the cart
      const existingItemIndex = state.findIndex((item) => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        // If it exists, remove it from the cart
        state.splice(existingItemIndex, 1);
        return;
      }
      // If it doesn't exist, add it to the cart
      state.push(action.payload);
    },
  },
});

export const { AddToCart } = CartSlice.actions;
export default CartSlice.reducer;
