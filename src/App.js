import "bulma/css/bulma.min.css";

import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <section clasName="section">
        <ItemListContainer />
      </section>
    </div>
  );
}

export default App;
