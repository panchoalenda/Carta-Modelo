export default function BotonesHeader() {
  return (
    <div className="button-container">
      <h1>Menú</h1>
      <button className="button">
        <img src="img/iconoCarrito.gif" alt="Carrito" />
        Pedido
      </button>
      <button className="button">
        <img src="img/iconoUbicacion.gif" alt="Ubicación" />
        Reseñas
      </button>
    </div>
  );
}
