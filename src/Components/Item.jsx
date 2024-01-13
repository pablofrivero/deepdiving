import { Link } from "react-router-dom";
import { LiaEyeSolid } from "react-icons/lia";

const Item = ({ producto }) => {
  return (
 <div className="bg-white rounded-md p-2 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
      <div className="card">
      {producto.stock === 0 && (
        <div className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded">
          Sin stock
        </div>
      )}
        <img className="mx-auto w-32 h-32 object-cover" src={producto.imagen} alt={producto.title} />

        <div className="mt-2 text-center">
          <h3 className="text-xl font-semibold">{producto.titulo}</h3>
          <p className="text-2xl text-green-800 font-semibold">${producto.precio}</p>
          <Link
            className="flex items-center justify-center mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out text-sm"
            to={`/item/${producto.id}`}
          >
            <span className="mr-1"><LiaEyeSolid /></span>
            Ver más
          </Link>
        </div>
      </div>
    </div>
  
  );
};

export default Item;
