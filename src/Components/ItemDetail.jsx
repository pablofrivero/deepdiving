import React from "react";
import ItemCount from "./ItemCount";
import { MdArrowCircleLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const ItemDetail = ({ item }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Este método de navigate es equivalente a history.goBack()
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <img
          className="mx-auto w-96 h-96 object-cover transition-transform transform hover:scale-110"
          src={item.imagen}
          alt={item.title}
        />

        <div>
          <h1 className="text-4xl font-semibold mb-4">{item.titulo}</h1>

          <p className="descripcion mb-4">{item.descripcion}</p>

          <p className="text-xl mb-2">
            Precio Exclusivo:
            <strong className="precio text-green-700 mb-4 text-xl">
              {" "}
              ${item.precio}
            </strong>
          </p>

          {item.stock === 0 ? (
            <p className="mb-4">
              Stock Disponible:{" "}
              <span className="capsule bg-red-500 text-white p-1 rounded">
                Sin Stock
              </span>
            </p>
          ) : (
            <p className="mb-4">Stock Disponible: {item.stock}</p>
          )}

          <div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <div className="inline-block py-2 px-5 rounded-full text-sm bg-amber-300 hover:bg-amber-400 duration-300">
                Envío gratuito
              </div>
              <div className="mt-4">
                <ItemCount item={item} initial={1} stock={item.stock} />
              </div>
            </div>

            <div className="mt-4">
              <button
                className={` mt-4 px-4 py-2 bg-gray-500 text-white font-semibold rounded-md text-md flex items-center justify-center `}
                onClick={handleGoBack}
              >
                <MdArrowCircleLeft className="mr-4" /> Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
