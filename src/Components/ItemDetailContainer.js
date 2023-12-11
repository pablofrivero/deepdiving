import { useEffect, useState } from "react";
import { getItemById } from "../helpers/asyncMock";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const {itemId}= useParams(); //capturo el parametro en la url

  useEffect(() => {
    getItemById(Number(itemId)) //lo convierto a nro xq es un string
      .then((res) => {
        setItem(res);
    })
    .catch(error => {
      console.error(error);
    });
  }, [itemId]);

  return (
    <div>
     { item && <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
