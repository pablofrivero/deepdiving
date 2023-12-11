import "bulma/css/bulma.min.css";
import "./main.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer  from "./Components/ItemDetailContainer";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { Contacto } from "./Components/Contacto";
import { Error } from "./Components/Error";
import ItemListContainer from "./Components/ItemListContainer";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer />}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="*" element={<Error/>} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
