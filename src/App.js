import React from "react";

import Home from "./Components/Pages/Home";
import Cadastro from "./Components/Pages/Cadastro";
import Cursos from "./Components/Pages/Cursos";
import DepoimentosDeAlunos from "./Components/Pages/DepoimentosDeAlunos";
import Instrutores from "./Components/Pages/Instrutores";
import Login from "./Components/Pages/Login";
import SideralNaImprensa from "./Components/Pages/SideralNaImprensa";
import SobreASideral from "./Components/Pages/SobreASideral";
import TermosDeUso from "./Components/Pages/TermosDeUso";
import TrabalheConosco from "./Components/Pages/TrabalheConosco";
import Logado from "./Components/Pages/Logado"

import BootStrapCarousel from "./Components/Pages/BootstrapCarousel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebFont from 'webfontloader';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />;
      <Route path="/cadastro" element={<Cadastro />} />;
      <Route path="/cursos" element={<Cursos />} />;
      <Route path="/depoimentos" element={<DepoimentosDeAlunos />} />;
      <Route path="/instrutores" element={<Instrutores />} />;
      <Route path="/login" element={<Login />} />;
      <Route path="/imprensa" element={<SideralNaImprensa />} />;
      <Route path="/termos-de-uso" element={<TermosDeUso />} />;
      <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />;
      <Route path="/logado" element={<Logado />} />  
    </Routes>
    </BrowserRouter>
  );
}

export default App;