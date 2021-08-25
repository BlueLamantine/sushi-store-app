import CartIcon from "../Cart/CartIcon";
const HeaderCartButton = props => {
  return (
    <button className="flex text-center" onClick={props.onClick}>
      <span className="w-8 h-8 p-3">
          <CartIcon/>
      </span>
      <span className="p-5">3</span>
    </button>
  );
};

export default HeaderCartButton;
