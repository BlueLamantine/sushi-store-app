import { useContext } from 'react';
import SushiForm from './SushiItemForm';
import CartContext from '../../store/cart-context';

const SushiItem = ({ id, name, desc, price }) => {
  const cartCtx = useContext(CartContext);
  const formatPrice = `$${price.toFixed(2)}`;

  const addToCardHandler = amount => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className="container flex justify-between items-center p-3">
      <div className="pr-10 flex flex-col items-start">
        <h3 className="text-2xl font-bold">{name}</h3>
        <div className="container text-sm">{desc}</div>
      </div>
      <div className="pl-20">{formatPrice}</div>
      <div>
        <SushiForm onAddToCart={addToCardHandler} />
      </div>
    </li>
  );
};

export default SushiItem;
