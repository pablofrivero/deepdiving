import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../config/firebase";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams(); // Asigno el parámetro que tengo en la URL

  const [isLoading, setIsLoading] = useState(false); //Para posterior mostrar el spinner

  useEffect(() => {
    setIsLoading(true); //ACtivo el spinner

    const productosRef = collection(db, "items");

    const q = categoryId
      ? query(productosRef, where("categoria", "==", categoryId))
      : productosRef;

    getDocs(q)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
        setIsLoading(false); //Con la respuesta lo cancelo
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div>
      <div className="has-text-centered">
        {isLoading ? (
          <div className="flex items-center justify-center h-screen">
            <div className="spinner"></div>
          </div>
        ) : (
          <ItemList productos={productos} />
        )}
      </div>
      <br/>
    </div>
  );
};

export default ItemListContainer;
