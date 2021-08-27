import HeaderCartButton from './HeaderCartButton';
const Header = props => {
  return (
    <header className="max-w-2xl  mx-auto justify-self-center flex justify-between items-baseline m-2">
      <h1 className="text-3xl text-yellow-900">Sushi Store</h1>
      <HeaderCartButton onClick={props.onShowCart} />
    </header>
  );
};

export default Header;
