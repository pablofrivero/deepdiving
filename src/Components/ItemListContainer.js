import { getItems, getItemByCategory } from "../helpers/asyncMock";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams(); // Asigno el parámetro que tengo en la URL

  // Esta funcion se encargará de formatear el título de la categoría
  const formatearTitulo = (categoria) => {
    const partesCategoria = categoria.split('-');
    const tituloFormateado = partesCategoria.map(
      (parte) => parte.charAt(0).toUpperCase() + parte.slice(1)
    );
    return tituloFormateado.join(' ');
  };

  const [isLoading, setIsLoading] = useState(false); //Para posterior mostrar el spinner


  useEffect(() => {
    setIsLoading(true); //ACtivo el spinner
    const asyncFunc = categoryId ? getItemByCategory : getItems;

    asyncFunc(categoryId)
      .then((response) => {
        setProductos(response);
        setIsLoading(false); //Con la respuesta lo cancelo
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  const tituloFormateado = categoryId ? formatearTitulo(categoryId) : '';

  return (
    <div>
      
      <div className="has-text-centered">
        <h1>{greeting}</h1>
        {isLoading ? <center><div className="spinner"></div></center> :""}
        {categoryId && <h1 has-text-centered>Estas en la sección {tituloFormateado}</h1>}
      </div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
