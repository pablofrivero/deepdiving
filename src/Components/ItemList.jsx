import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="container">
      <div className="productos">
        {productos.map((produc) => (
          <Item key={produc.id} producto={produc} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
