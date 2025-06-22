import Item from "./Item";

export const ButtonMain = ({item, onClick, selected}) => {
  const { icon, name, active } = item;

  console.log("selected", selected);

  const handleClick = (event) => {
    console.log("event", event);
    onClick(event);
  };

  return (
    <>
      <button className= {
        active ? "menu-item active" :  "menu-item disabled"}
      onClick={handleClick}>
        <img src={icon} alt={`Ícono de ${name.toLowerCase()}`} />
        <div className="menu-item text">
          <h3>{name}</h3>
        </div>
      </button>
      {/* {
        selected && (
          <ItemDetail item={item}/>
        )
      } */}

    </>
  );
};