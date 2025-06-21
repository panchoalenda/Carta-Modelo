import { useEffect, useRef, useState } from "react";
import { objectMain } from "../data/objectMain";
import { ButtonMain } from "./ButtonMain";
import ItemDetail from "./ItemDetail";

const arrayMainInitial = Object.values(objectMain); //Transformo el objeto en un array
export default function Menu() {

  const detailRef = useRef(null); // 👈 referencia al detalle

  const [arrayMain, setArrayMain] = useState(arrayMainInitial);
  const [itemMain, setItemMain] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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
            <ItemDetail item={selectedItem}/>
          )
        }
      </section>
    </>
  );
}
