import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';
import cartUISlice from './cartUI-slice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartUI: cartUISlice,
  },
});

export default store;
