import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { IoIosTrash } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdArrowCircleLeft } from "react-icons/md";
import { ImMinus, ImPlus } from "react-icons/im";
import Checkout from "../CheckOut/CheckOut";

export const Cart = () => {
  const {
    cart,
    valorTotal,
    removeFromCart,
    cantidadTotal,
    decreaseFromCart,
    increaseFromCart,
  } = useContext(CartContext);

  if (cantidadTotal === 0)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            No hay items en el carrito
          </h1>
          <Link
            to="/"
            className="flex items-center justify-center text-blue-500 hover:underline"
          >
            <MdArrowCircleLeft className="text-xl mr-2" />
            <span className="text-lg font-bold">Regresar a Comprar!</span>
          </Link>
        </div>
      </div>
    );

  return (
    <div className="flex justify-center items-start">
      {/* Primer Columna: Tabla con CartItems */}
      <div className="w-3/4 p-4">
        <table className="table-auto w-full border-collapse rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2 text-center">Imagen</th>
              <th className="border px-4 py-2 text-center">Título</th>
              <th className="border px-4 py-2 text-center">Precio</th>
              <th className="border px-4 py-2 text-center">Cant.</th>
              <th className="border px-4 py-2 text-center">Subtotal</th>
              <th className="border px-4 py-2 text-center">Acción</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border">
                <td className="flex items-center justify-center space-x-2 px-4 py-2">
                  <img
                    src={item.imagen}
                    alt={item.titulo}
                    title={item.titulo}
                    className="w-12 h-12 object-cover"
                  />
                </td>
                <td className="border px-4 py-2 text-center">{item.titulo}</td>
                <td className="border px-4 py-2 text-center">${item.precio}</td>
                <td className="border px-4 py-2 text-center">
                  {item.quantity}
                </td>
                <td className="border px-4 py-2 text-center">
                  ${item.precio * item.quantity}
                </td>
                <td className="border px-4 py-2 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      onClick={() => decreaseFromCart(item.id)}
                      className="button bg-gray-500 text-white rounded-full p-2 hover:bg-blue-600"
                    >
                      <ImMinus className="text-sm" />
                    </button>
                    <IoIosTrash
                      className="text-3xl cart-item-trash-icon cursor-pointer text-red-500"
                      onClick={() => removeFromCart(item.id)}
                    />
                    <button
                      onClick={() => increaseFromCart(item.id,item.stock)}
                      className="button bg-gray-500 text-white rounded-full p-2 hover:bg-blue-600"
                    >
                      <ImPlus className="text-sm" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Segunda Columna: CheckOut */}
      
      <Checkout cart={cart} valorTotal={valorTotal}/>
    </div>
  );
};
