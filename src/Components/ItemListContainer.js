function ItemListContainer(props) {
  const {greeting}=props
  return (
    <div className="column is-half is-offset-one-quarter">
      <p className="has-text-centered">
        <div className="itemListContainer">
          <p className="is-size-2">{greeting}</p>
        </div>
      </p>
    </div>
  );
}
export default ItemListContainer;
