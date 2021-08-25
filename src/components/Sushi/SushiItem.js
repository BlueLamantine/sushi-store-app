import SushiForm from './SushiItemForm';
const SushiItem = ({ name, desc, price }) => {
  const formatPrice = `$${price.toFixed(2)}`;
  return (
    <li className="container flex justify-between items-center p-3">
      <div className="pr-10 flex flex-col items-start">
        <h3 className="text-2xl font-bold">{name}</h3>
        <div className="container text-sm">{desc}</div>
      </div>
      <div className="pl-20">{formatPrice}</div>
      <div>
        <SushiForm />
      </div>
    </li>
  );
};

export default SushiItem;
