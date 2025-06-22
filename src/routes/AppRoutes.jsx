import Header from "../componentes/Header";
import BotonesHeader from "../componentes/BotonesHeader";
import Buscador from "../componentes/Buscador";
import {Menu} from "../componentes/Menu";
import { Route, Routes } from "react-router-dom";
import { Bebidas } from "../componentes/Bebidas";
import { Comidas } from "../componentes/Comidas";
import { Postres } from "../componentes/Postres";
import { Otros1 } from "../componentes/Otros1";
import { Otros2 } from "../componentes/Otros2";
import { Otros3 } from "../componentes/Otros3";
import Footer from "../componentes/Footer";

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
        <Route path="/comidas" element={<Comidas />} />
        <Route path="/postres" element={<Postres />} />
        <Route path="/otros1" element={<Otros1 />} />
        <Route path="/otros2" element={<Otros2 />} />
        <Route path="/otros3" element={<Otros3 />} />
      </Routes>
      <Footer />
    </>
  );
}


