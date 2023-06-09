import Menu from "./Componentes/Menu/menu";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Componentes/Home/Home";
import Noticias from "./Componentes/Noticias/Noticias";


export default function App() {
  return (
    <>
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/noticias" Component={Noticias}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}


