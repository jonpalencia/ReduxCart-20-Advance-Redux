import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '../../store/cart';
import { cartUIAction } from '../../store/cartUI-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

function ProductItem(props) {
  const { id, title, price, description, totalPrice, quantity } = props;
  const cartQuantity = useSelector(state => state.cart.cartQuantity);
  const dispatch = useDispatch();
  const handleAddItemToCart = function () {
    if (cartQuantity === 0) dispatch(cartUIAction.showCart());
    dispatch(
      cartAction.addItemToCart({
        id,
        title,
        price,
        description,
        totalPrice,
        quantity,
      }),
    );
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
