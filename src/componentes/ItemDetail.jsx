const ItemDetail = ({ item }) => {
  if (!item) return null; // Verifica primero si existe el item

  const { items = [] } = item; // Extrae los sub-items.
  // Es lo mimso que const items = item.items;
  // [] le asigna un array vacío por defecto si item.items no existe.
  // Esto previene errores si item no tiene la propiedad items.

  return (
    <>
      {items.length > 0 &&
        items.map(({ name, description, image, alt }, index) => (
          <div key={index} className="item-details">
            <img src={image} alt={alt} />
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        ))}
    </>
  );
};

export default ItemDetail;
