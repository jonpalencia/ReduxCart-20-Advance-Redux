import { useDispatch, useSelector } from 'react-redux';
import { cartUIAction } from '../../store/cartUI-slice';
import classes from './CartButton.module.css';

function CartButton() {
  const cartQuantity = useSelector(state => state.cart.cartQuantity);
  const dispatch = useDispatch();
  const handleToggleCart = function () {
    dispatch(cartUIAction.toggle());
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
