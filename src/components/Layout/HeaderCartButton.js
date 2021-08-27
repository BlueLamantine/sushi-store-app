import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
const HeaderCartButton = props => {
  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className="flex text-center" onClick={props.onClick}>
      <span className="w-8 h-8 p-3">
        <CartIcon />
      </span>
      <span className="p-5">{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
