import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import ItemDetailsContainer from './Components/ItemsListContainer/ItemDetailsContainer/ItemDetailsContainer';
import ItemsListContainer from './Components/ItemsListContainer/ItemsListContainer';
import NavBar from "./Components/NavBar/NavBar";
import UnderConstruction from './Components/UnderConstruction/UnderConstruction';
import CartContext from './Components/CartContext/CartContext';
import CartContainer from './Components/CartContainer/CartContainer';
import Alert from './Components/Alert/Alert';
import Shipping from './Components/Checkout/Shipping/Shipping';
import Payment from './Components/Checkout/Payment/Payment';
import Confirm from './Components/Checkout/Confirm/Confirm';

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <NavBar />
        <Alert />
        <Routes>
          <Route path="/" element={<ItemsListContainer isLanding={true}/>}/>
          <Route path="/category/:categoryID" element={<ItemsListContainer isLanding={false}/>}/>
          <Route path="/item/:itemID" element={<ItemDetailsContainer />}/>
          <Route path="/whereto" element={<UnderConstruction />}/>
          <Route path="/about" element={<UnderConstruction />}/>
          <Route path="/checkout/shipping" element={<Shipping />}/>
          <Route path="/checkout/payment" element={<Payment />}/>
          <Route path="/checkout/confirm" element={<Confirm />}/>
          <Route path="/checkout/summary" element={<UnderConstruction />}/>
        </Routes>
        <CartContainer />
      </BrowserRouter>
    </CartContext>
  );
}

export default App;