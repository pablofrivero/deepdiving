import { ImPlus } from "react-icons/im";
import { ImMinus } from "react-icons/im";

import { useState } from "react";
import React from "react";
import "../ItemCount.css"; // Importa el archivo CSS

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const handleClickPlus = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleClickMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="Counter">
      <div className="Controls" style={{ display: "flex", alignItems: "center" }}>
        <button
          onClick={handleClickMinus}
          className="button is-danger is-rounded is-small"
        >
          <ImMinus />
        </button>
        <strong>
          <h1 style={{ margin: "0 10px" }}>{quantity}</h1>
        </strong>
        <button
          onClick={handleClickPlus}
          className="button is-success is-rounded is-small"
        >
          <ImPlus />
        </button>
      </div>
      <div>
        <button
          className="button is-info is-fullwidth"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>

    
  );
};

export default ItemCount;
