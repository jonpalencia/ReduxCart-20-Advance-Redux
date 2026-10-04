import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { cartUIAction } from './store/cartUI-slice';
import { sendCartData } from './store/cart-actions';

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
      //* Convert from executing async ops in component to action creator.
      dispatch(sendCartData(cartState));
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
