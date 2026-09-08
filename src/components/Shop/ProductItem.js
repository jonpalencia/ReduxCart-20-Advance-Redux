import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartAction } from '../../store/cart';

function ProductItem(props) {
  const { title, price, description } = props;
  const cartQuantity = useSelector(state => state.cart.cartQuantity);
  const dispatch = useDispatch();
  const handleAddItemToCart = function () {
    if (cartQuantity === 0) {
      dispatch(cartAction.addCartItem());
      dispatch(cartAction.showCart());
      return;
    }
    dispatch(cartAction.addCartItem());
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description} </p>
        <div className={classes.actions}>
          <button onClick={handleAddItemToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
}

export default ProductItem;
