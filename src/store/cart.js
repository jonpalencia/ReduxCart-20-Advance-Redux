import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  cartItems: [],
  cartQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    replaceItemToCart(state, action) {
      state.cartItems = action.payload.cartItems;
      state.cartQuantity = action.payload.cartQuantity;
    },

    addItemToCart(state, action) {
      ++state.cartQuantity;
      const existingItemIndex = state.cartItems.findIndex(
        item => item.id === action.payload.id,
      );
      const existingCartItem = state.cartItems[existingItemIndex];
      if (existingCartItem) {
        existingCartItem.quantity  = existingCartItem.quantity + 1 // prettier-ignore
        existingCartItem.totalPrice = existingCartItem.totalPrice + existingCartItem.price; // prettier-ignore
      } else {
        const newCartItem = action.payload;
        newCartItem.quantity = 1;
        newCartItem.totalPrice = newCartItem.price;
        state.cartItems.push(newCartItem);
      }
    },

    removeItemToCart(state, action) {
      if (state.cartQuantity <= 0) return;
      --state.cartQuantity;
      const findItemIndex = state.cartItems.findIndex(
        item => item.id === action.payload,
      );
      const findCartItems = state.cartItems[findItemIndex];
      if (findCartItems.quantity > 1) {
        state.cartItems[findItemIndex].quantity = findCartItems.quantity - 1;
        state.cartItems[findItemIndex].totalPrice = findCartItems.totalPrice - findCartItems.price; // prettier-ignore
      } else {
        const filterOutItem = state.cartItems.filter(
          item => item.id !== action.payload,
        );
        state.cartItems = filterOutItem;
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
