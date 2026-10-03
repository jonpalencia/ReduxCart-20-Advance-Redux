import { createSlice } from '@reduxjs/toolkit';

const cartUI_initialState = {
  showCart: false,
  notification: {
    status: '',
    title: '',
    message: '',
  },
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
    showNotification(state, action) {
      state.notification.status = action.payload.status;
      state.notification.title = action.payload.title;
      state.notification.message = action.payload.message;
    },
    resetNotification(state) {
      state.notification = cartUI_initialState.notification;
    },
  },
});

export const cartUIAction = cartUISlice.actions;
export default cartUISlice.reducer;
