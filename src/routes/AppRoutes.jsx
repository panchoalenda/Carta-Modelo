import Header from "../componentes/Header";
import BotonesHeader from "../componentes/BotonesHeader";
import Buscador from "../componentes/Buscador";
import Menu from "../componentes/Menu";
import { Route, Routes } from "react-router-dom";
import { Bebidas } from "../../view/Bebidas";

export default function AppRoute() {
  return (
    <>
      <Header />
      <BotonesHeader/>
      <Buscador />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/bebidas" element={<Bebidas />} />
      </Routes>
    </>
  );
}


