import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartAction } from '../../store/cart';

function CartButton() {
  const cartQuantity = useSelector(state => state.cart.cartQuantity);
  const dispatch = useDispatch();
  const handleToggleCart = function () {
    dispatch(cartAction.toggleCart());
  };

  return (
    <button
      className={classes.button}
      onClick={handleToggleCart}
      disabled={cartQuantity <= 0}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
}

export default CartButton;
