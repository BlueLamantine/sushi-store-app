import { useState } from 'react';
import Header from './components/Layout/Header';
import './App.css';
import Sushi from './components/Sushi/Sushi';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarIstHandle = () => {
    setCartIsShown(true);
  };
  const hideCarHandle = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider className="max-w-screen-lg mx-auto">
      {cartIsShown && <Cart onCloseCart={hideCarHandle} />}
      <Header onShowCart={showCarIstHandle} />
      <main>
        <Sushi />
      </main>
    </CartProvider>
  );
}

export default App;
