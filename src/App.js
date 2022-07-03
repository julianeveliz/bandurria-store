import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import ItemDetailsContainer from './Components/ItemsListContainer/ItemDetailsContainer/ItemDetailsContainer';
import ItemsListContainer from './Components/ItemsListContainer/ItemsListContainer';
import NavBar from "./Components/NavBar/NavBar";
import UnderConstruction from './Components/UnderConstruction/UnderConstruction';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemsListContainer isLanding={true}/>}/>
          <Route path="/category/:categoryID" element={<ItemsListContainer isLanding={false}/>}/>
          <Route path="/item/:itemID" element={<ItemDetailsContainer />}/>
          <Route path="/whereto" element={<UnderConstruction />}/>
          <Route path="/about" element={<UnderConstruction />}/>
          <Route path="/cart" element={<UnderConstruction />}/>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;