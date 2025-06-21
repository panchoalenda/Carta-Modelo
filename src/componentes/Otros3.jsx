
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
export const Otros3 = () => {

  const popup = ()=>{
    Swal.fire({
      icon: "success",
      title: "Promociones del día 🍕🍔",
      html: `
    <div style="display: flex; flex-direction: column; align-items: center;">
    <div><button>Pedir</button>
      <img src="https://source.unsplash.com/400x200/?pizza" alt="Pizza" style="width: 100%; max-width: 400px; margin-bottom: 10px; border-radius: 8px;">
      </div>
    <img src="https://source.unsplash.com/400x200/?burger" alt="Hamburguesa" style="width: 100%; max-width: 400px; margin-bottom: 10px; border-radius: 8px;">
      <p style="margin-top: 10px;">¡Estas son las promos del día! Disfrutá de una rica comida 😋</p>
    </div>
  `,
      footer: '<a href="https://tupagina.com">¿Quiénes somos?</a>'
    });

  };

  return (
    <section className="menu">
      <NavLink to="/comida" className="menu-item" onClick={popup}>
        <img src="img/iconoComida.png" alt="Ícono de comida" />
        <h3>Comidas</h3>
      </NavLink>
      <NavLink to="/bebidas" className="menu-item">
        <img src="img/iconoBebida.png" alt="Ícono de bebida" />
        <h3>Bebidas</h3>
      </NavLink>
      <NavLink to="/postres" className="menu-item">
        <img src="img/iconoPostre.png" alt="Ícono de postres" />
        <h3>Postres</h3>
      </NavLink>
    </section>
  );
};

