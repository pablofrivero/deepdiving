import { Link } from "react-router-dom";
import { LiaEyeSolid } from "react-icons/lia";

const Item = ({ producto }) => {
  return (
    <div className="producto has-text-centered">
      <img src={producto.imagen} alt={producto.title} />

      <div>
        <h3>{producto.titulo}</h3>
        <p>${producto.precio}</p>
        <Link className="button is-primary" to={`/item/${producto.id}`}>
        <LiaEyeSolid /> Ver más
        </Link>
      </div>
    </div>
  );
};

export default Item;
