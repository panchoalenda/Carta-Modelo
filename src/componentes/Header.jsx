export default function Header() {
  return (
    <header>
      <div className="encabezado imagen">
        <img src="img/logo.png" className="logo" alt="Manual Brew Logo" />
      </div>

      <div className="encabezado texto">
        <h1 className="title">MANUAL BREW</h1>
        <button className="promo-button">Promociones</button>
      </div>
    </header>
  );
}
