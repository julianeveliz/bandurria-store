import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemDetailsContainer from './Components/ItemsListContainer/ItemDetailsContainer/ItemDetailsContainer';
import ItemsListContainer from './Components/ItemsListContainer/ItemsListContainer';
import NavBar from "./Components/NavBar/NavBar";
import Finish from './Components/Finish/Finish';
import CartContext from './Components/CartContext/CartContext';
import CartContainer from './Components/CartContainer/CartContainer';
import Alert from './Components/Alert/Alert';
import Shipping from './Components/Checkout/Shipping/Shipping';
import Payment from './Components/Checkout/Payment/Payment';
import Confirm from './Components/Checkout/Confirm/Confirm';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDDGkPGEMuK4slnjgHrHof-XdeJl0GSOMo",
  authDomain: "coderhouse-bandurria-store.firebaseapp.com",
  projectId: "coderhouse-bandurria-store",
  storageBucket: "coderhouse-bandurria-store.appspot.com",
  messagingSenderId: "134464911900",
  appId: "1:134464911900:web:7c3053bc80e09375683dd9"
};
initializeApp(firebaseConfig);

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
          <Route path="/checkout/shipping" element={<Shipping />}/>
          <Route path="/checkout/payment" element={<Payment />}/>
          <Route path="/checkout/confirm" element={<Confirm />}/>
          <Route path="/checkout/summary" element={<Finish />}/>
        </Routes>
        <CartContainer />
      </BrowserRouter>
    </CartContext>
  );
}

export default App;