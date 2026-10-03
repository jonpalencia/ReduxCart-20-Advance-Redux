import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { cartUIAction } from './store/cartUI-slice';
import { FIREBASE_URL } from './utils/firebaseConfig';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

function App() {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.cart.cartQuantity);
  const showCart = useSelector(state => state.cartUI.showCart);
  const cartState = useSelector(state => state.cart.cartItems);
  const notification = useSelector(state => state.cartUI.notification);

  useEffect(() => {
    if (cartState.length >= 1) {
      (async function () {
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
            body: JSON.stringify(cartState),
          });
          if (!response.ok) throw new Error('Error, Please try again...');
          dispatch(
            cartUIAction.showNotification({
              status: 'success',
              title: 'Request success',
              message: 'Your cart is successfully updated!',
            }),
          );
        } catch (err) {
          dispatch(
            cartUIAction.showNotification({
              status: 'error',
              title: 'Failed to load cart',
              message: err.message,
            }),
          );
        }
      })();
    }

    //* This will set the timer on how long will the NOTIFICATION be visible.
    return () => {
      setTimeout(() => {
        dispatch(cartUIAction.resetNotification());
      }, 1000);
    };
  }, [cartState, dispatch]);

  return (
    <>
      {notification.status && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && cartQuantity > 0 && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
