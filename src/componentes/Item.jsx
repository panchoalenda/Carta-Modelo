import Swal from "sweetalert2";

const Item = ({ item }) => {
  if (!item) return null; // Verifica primero si existe el item

  const { items = [] } = item; // Extrae los sub-items.
  // Es lo mimso que const items = item.items;
  // [] le asigna un array vacío por defecto si item.items no existe.
  // Esto previene errores si item no tiene la propiedad items.

  const addItem = ()=>{
    alert("Pedido Agregado");
  };



  const popupItem = (name,image, description, alt) =>{
    Swal.fire({
      width: "800px",
      showConfirmButton: false,
      showCloseButton: true,
      customClass: {
        popup: "product-popup"
      },
      html: `
    <style>
      .product-popup {
        display: flex;
        flex-direction: row;
        padding: 2rem;
        gap: 2rem;
        font-family: sans-serif;
      }

      .product-image {
        flex: 1;
        text-align: center;
      }

      .product-image img {
        max-width: 100%;
        border-radius: 10px;
      }

      .product-content {
        flex: 2;
        text-align: left;
      }

      .product-content h1 {
        font-size: 2.2rem;
        margin-bottom: 1rem;
      }

      .product-content p {
        font-size: 1rem;
        margin-bottom: 2rem;
        color: #555;
      }

      .order-btn {
        background-color: #ffc107;
        color: black;
        padding: 0.75rem 1.5rem;
        border: none;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 2rem;
      }

      details {
        margin-bottom: 1rem;
        font-size: 0.95rem;
      }

      summary {
        cursor: pointer;
        font-weight: bold;
      }
    </style>

    <div class="product-image">
      <img src=${image} alt=${alt} />
      <br><button class="order-btn">Agregar al pedido</button>
    </div>
    <div class="product-content">
      <h1>${name}</h1>
      <p>${description}.</p>

      <details>
        <summary>Información nutricional</summary>
        <p>Calorías: 570 kcal. Grasas: 25 g. Proteínas: 28 g. Carbohidratos: 48 g.</p>
      </details>
      <details>
        <summary>Información sobre alérgenos</summary>
        <p>Contiene gluten, huevo, leche y soya.</p>
      </details>
    </div>
  `,
      didOpen: (popup) => {
      // agrega el listener al botón ya renderizado
        popup.querySelector(".order-btn")
          .addEventListener("click", addItem);
      }
    });
  };

  return (
    <>
      {items.length > 0 &&
        items.map(({ name, image, description, alt }, index) => (
          <div key={index} className="item-details">
            <button onClick={()=>popupItem(name,image, description, alt)}>
              <img src={image} alt={alt} />
              <h3>{name}</h3>
            </button>
          </div>
        ))}
    </>
  );
};

export default Item;
