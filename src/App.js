import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const cartQuantity = useSelector(state => state.cart.cartQuantity);
  const showCart = useSelector(state => state.cart.showCart);
  console.log(showCart);

  return (
    <Layout>
      {showCart && cartQuantity > 0 && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
