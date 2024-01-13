import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { itemId } = useParams(); //capturo el parametro en la url
  const [isLoading, setIsLoading] = useState(false); //Para posterior mostrar el spinner

  useEffect(() => {
    setIsLoading(true); //ACtivo el spinner

    const docRef = doc(db, "items", itemId);

    getDoc(docRef).then((resp) => {
      setItem({
        ...resp.data(),
        id: resp.id,
      });
      setIsLoading(false); //Con la respuesta lo cancelo
    });
  }, [itemId]);

  return (
    <div>
      {isLoading ? (
      <div className="flex items-center justify-center h-screen">
      <div className="spinner"></div>
    </div>
      ) : (
        item && <ItemDetail item={item} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
