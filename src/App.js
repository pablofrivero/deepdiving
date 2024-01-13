import "./main.css";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer  from "./components/ItemDetailContainer";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { Contacto } from "./components/Contacto";
import { Error } from "./components/Error";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer/Footer";
import  CartContextProvider  from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";
import { CheckOutForm } from "./components/CheckOutForm/CheckOutForm";
//import SearchBar from "./components/SearchBar/SearchBar";


function App() {



  return ( 
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
       
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer />}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
          <Route path="/contacto" element={<Contacto />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/checkout" element={<CheckOutForm/>}/>

          <Route path="*" element={<Error/>} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
