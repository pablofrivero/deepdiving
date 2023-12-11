import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";
import { MdArrowCircleLeft } from "react-icons/md";

export const ItemDetail = ({ item }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Este método de navigate es equivalente a history.goBack()
  };

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.titulo} />
        
        <div>
          <h1 className="titulo">{item.titulo}</h1>

          <p className="descripcion">{item.descripcion}</p>
         
          <p className="precio">${item.precio}</p>
          <div className="columns">
          <div className="column is-one-quarter">

              <ItemCount
                stock={10}
                initial={1}
                onAdd={(quantity) =>
                  console.log("Cantidad Agregada. ", quantity)
                }
              />
              <button className="button is-light is-fullwidth" onClick={handleGoBack} >
                <MdArrowCircleLeft/> Volver
              </button>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};
