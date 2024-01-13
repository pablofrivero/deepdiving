// Checkout.js
import React from "react";
import { Link } from "react-router-dom";

const Checkout = ({ cart, valorTotal }) => {
  return (
    <div className="w-1/3 p-4">
      <div className="card bg-gray-200 border-collapse rounded-lg overflow-hidden">
        <div className="card-content">
          <h2 className="text-center mb-4 text-lg font-bold">
            <strong>Resumen del Pedido</strong>
          </h2>
          {cart.map((item) => (
            <div className="flex justify-between items-center" key={item.id}>
              <div className="w-3/4">
                <h5>
                  {item.quantity} x {item.titulo}
                </h5>
              </div>
              <div className="w-1/4">
                <h5 className="text-right">${item.precio * item.quantity}</h5>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <hr className="border-t-2 border-gray-400" />
            <div className="flex justify-between items-center mt-4">
              <p className="text-xl font-bold">Total</p>
              <p className="text-xl font-bold">${valorTotal}</p>
            </div>
            <Link
              to="/checkout"
              className="block mx-auto mt-4 text-center text-white bg-blue-500 py-2 px-4 rounded-full hover:bg-blue-600"
            >
              Finalizar Compra
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
