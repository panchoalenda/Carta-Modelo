import { NavLink } from "react-router-dom";

export default function Menu() {
  return (

    <section className="menu">
      <NavLink to={"/bebidas"} className="menu-item">
        <img src="/src/img/iconoComida.png" alt="Ícono de comidNavLink" />
        <h3>Comidas</h3>
      </NavLink>
      <NavLink href="bebida.html" className="menu-item">
        <img src="/src/img/iconoBebida.png" alt="Ícono de bebidNavLink" />
        <h3>Bebidas</h3>
      </NavLink>
      <NavLink href="postre.html" className="menu-item">
        <img src="/src/img/iconoPostre.png" alt="Ícono de postres" />
        <h3>Postres</h3>
      </NavLink>
      <NavLink href="postre.html" className="menu-item">
        <img src="/src/img/iconoCarta.png" alt="Elemento" />
        <h3>Elemento</h3>
      </NavLink>
      <NavLink href="postre.html" className="menu-item">
        <img src="/src/img/iconoCarta.png" alt="Elemento" />
        <h3>Elemento</h3>
      </NavLink>
      <NavLink href="postre.html" className="menu-item">
        <img src="/src/img/iconoCarta.png" alt="Elemento" />
        <h3>Elemento</h3>
      </NavLink>
    </section>
  );
}
