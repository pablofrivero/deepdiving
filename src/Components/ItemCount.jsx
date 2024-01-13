import { ImPlus, ImMinus } from "react-icons/im";
import { LuShoppingCart } from "react-icons/lu";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import "../ItemCount.css";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom

const ItemCount = ({ item, stock, initial }) => {
  const { cart, addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(initial);

  useEffect(() => {
    // Actualiza la cantidad al valor inicial cuando cambia el producto seleccionado
    setQuantity(initial);
  }, [item]);

  const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);

  const handleClickPlus = () => {
    if (quantity < stock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleClickMinus = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleClickAction = () => {
    if (isItemInCart) {
      console.log("Terminar Compra");
    } else {
      addToCart({ ...item, quantity });
      setQuantity((prevQuantity) => Math.min(prevQuantity + 1, stock));
    }
  };

  const buttonStyle = `ml-2w-full mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md text-md flex items-center justify-center ${
    !stock ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
  }`;

  return (
    <div className="Counter">
      {!isItemInCart ? 
      <div className="flex items-center space-x-6 ">
        <button
          onClick={handleClickMinus}
          className="button bg-gray-500 text-white rounded-full p-2 hover:bg-blue-600"
        >
          <ImMinus className="text-sm" />
        </button>
        <strong>
          <h1 className="text-xl">{quantity}</h1>
        </strong>
        <button
          onClick={handleClickPlus}
          className="button bg-gray-500 text-white rounded-full p-2 hover:bg-blue-600"
        >
          <ImPlus className="text-sm" />
        </button>
      </div> :''
    }
     <div>
  <button
    className={buttonStyle}
    onClick={handleClickAction}
    disabled={!stock}
  >
    <span className="flex items-center">
      <LuShoppingCart className="text-xl " />
      {isItemInCart ? (
        <Link to="/cart" className="ml-2">Ir Al Carrito</Link>
      ) : (
        "Agregar"
      )}
    </span>
  </button>
</div>

    </div>
  );
};

export default ItemCount;
