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

    addCartItem(state) {
      ++state.cartQuantity;
    },

    removeCartItem(state) {
      --state.cartQuantity;
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
