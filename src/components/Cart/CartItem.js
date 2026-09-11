import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/cart';
import classes from './CartItem.module.css';

function CartItem(props) {
  const { id, title, description, quantity, totalPrice, price } = props;
  const dispatch = useDispatch();
  const handleAddItemToCart = function () {
    dispatch(
      cartAction.addItemToCart({
        id,
        title,
        description,
        quantity,
        totalPrice,
        price,
      }),
    );
  };

  const handleRemoveItemToCart = function () {
    dispatch(cartAction.removeItemToCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemoveItemToCart}>-</button>
          <button onClick={handleAddItemToCart}>+</button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
