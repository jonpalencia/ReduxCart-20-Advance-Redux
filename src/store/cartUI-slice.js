import { createSlice } from '@reduxjs/toolkit';

const cartUI_initialState = {
  showCart: false,
};

const cartUISlice = createSlice({
  name: 'cartUI',
  initialState: cartUI_initialState,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
    },
    showCart(state) {
      state.showCart = true;
    },
    hideCart(state) {
      state.showCart = false;
    },
  },
});

export const cartUIAction = cartUISlice.actions;
export default cartUISlice.reducer;
