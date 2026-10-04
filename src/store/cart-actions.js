import { cartUIAction } from './cartUI-slice';
import { cartAction } from './cart';
import { FIREBASE_URL } from '../utils/firebaseConfig';

export const sendCartData = function (cart) {
  return async dispatch => {
    dispatch(
      cartUIAction.showNotification({
        status: 'Pending',
        title: 'Sending request',
        message: 'Your request is sending',
      }),
    );

    try {
      const response = await fetch(FIREBASE_URL, {
        method: 'PUT',
        body: JSON.stringify(cart),
      });

      if (!response.ok) throw new Error('Error, please try again...');
      dispatch(
        cartUIAction.showNotification({
          status: 'success',
          title: 'Request success',
          message: 'Your cart is successfully updated!',
        }),
      );
    } catch (err) {
      dispatch(
        cartAction.showNotification({
          status: 'error',
          title: 'Failed to load cart',
          message: err.message,
        }),
      );
    }
  };
};
