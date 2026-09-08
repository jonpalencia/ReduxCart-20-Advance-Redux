import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  cartQuantity: 0,
  showCart: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },

    hideCart(state) {
      state.showCart = false;
    },

    showCart(state) {
      state.showCart = true;
    },

    addCartItem(state) {
      ++state.cartQuantity;
    },

    removeCartItem(state) {
      if (state.cartQuantity <= 0) return;
      --state.cartQuantity;
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
