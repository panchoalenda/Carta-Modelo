import { useEffect, useRef, useState } from "react";
import { objectMain } from "../data/objectMain";
import { ButtonMain } from "./ButtonMain";
import Item from "./Item";
import Swal from "sweetalert2";

const arrayMainInitial = Object.values(objectMain); //Transformo el objeto en un array

export const Menu = ()=> {

  const detailRef = useRef(null); // 👈 referencia al detalle

  const [arrayMain, setArrayMain] = useState(arrayMainInitial);
  const [itemMain, setItemMain] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const imgModo = "img/modo.png";

  const handlerActive = (event) => {
    console.log("event", event);
    let item = event;
    item.active = true;
    setIsSelected(true); //Setea el estado de selected a true para mostrar el detalle del item
    setSelectedItem(item); //Guarda el item seleccionado en el estado selectedItem

    setItemMain(item); //Setteo el item seleccionado

    //Scroll hacia el selector del item seleccionado
    // 👇 hace scroll hacia el detalle
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // pequeño delay para que el DOM actualice
  };

  useEffect(() => {
    if (!itemMain) return; //Esta línea previene que el efecto se ejecute si itemMain todavía no tiene valor.
    //Es decir, solo se ejecuta después del primer clic en un botón.

    setArrayMain(prev =>  //Al pasarle una funcion a setArrayMain, se asegura de que se use el estado más reciente.
      //React automáticamente pasa el valor actual del estado (arrayMain) como prev.
      prev.map(itm => ({ //Crea un nuevo array basado en el estado anterior.
        ...itm, //Usa el operador spread para copiar las propiedades del objeto actual.
        active: itm.name === itemMain.name //Compara el nombre del item actual con el nombre del item seleccionado y si
        // coincide activa el botón correspondiente.
      }))
    );
  }, [itemMain]);

  useEffect(()=>{
    popup();
  },[]);

  const popup = ()=>{
    Swal.fire({
      // quitamos el icono por defecto
      icon:       null,
      showConfirmButton: false,
      showCloseButton: true,          // ← la “X” en la esquina
      background: "transparent",      // fondo transparente para que se vea el halo
      html: `
    <style>
      .coupon-wrapper{
        width: 300px;
        height: 300px;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        border: 6px solid #e7dacb;          /* borde beige */
        box-shadow: 0 8px 30px rgba(0,0,0,.35);
        display:flex;
        align-items:center;
        justify-content:center;
      }
      .coupon-wrapper::before{
        content:'';
        position:absolute; inset:0;
        background:url('https://es.cravingsjournal.com/wp-content/uploads/2021/04/croissants-4-1.jpg') center/cover;
        filter: brightness(.55);
      }
      .coupon-content{
        position:relative; z-index:2;
        color:#fff; text-align:center;
        font-family: 'Montserrat', sans-serif;
      }
      .coupon-content h1{
        font-size:3.5rem; line-height:1; margin:0;
        font-weight:900;
      }
      .yellow-band{
        margin-top:.25rem;
        font-size:1.25rem;
        font-weight:700;
        padding:.1rem .5rem;
        background:#ffb400;
        border-radius:.3rem;
      }
      .seal{
        position:absolute;
        bottom:-20px;                     /* sobresale un poco */
        left:50%; transform:translateX(-50%);
        width:90px; height:90px;
        border-radius:50%; border:6px solid #e7dacb;
        background:#fff url(${imgModo}) center/150% no-repeat;
        z-index:3;
      }
    </style>

    <div class="coupon-wrapper">
      <div class="coupon-content">
        <h1>10<span style="font-size:2.2rem">%</span><br>OFF</h1>
        <div class="yellow-band">todos los días</div>
      </div>
      <div class="seal"></div>
    </div>
  `,
      width: 400,
      padding: 0,
      allowOutsideClick: true,
      backdrop: "rgba(0,0,0,.55)"     // oscurece el fondo de la página
    });
  };



  return (
    <>
      <section className="menu">

        {arrayMain.map((item, index) => (
          <ButtonMain
            key={index}
            item={item}
            onClick={()=>handlerActive(item)}
            selected={item.name === itemMain?.name} //Verifica si el nombre del item coincide con el del item seleccionado
          />
        ))}
      </section>
      <section ref={detailRef} className="items-details">
        {
          isSelected && (
            <Item item={selectedItem}/>
          )
        }
      </section>
    </>
  );
};