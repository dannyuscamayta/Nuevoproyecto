import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./screens/404-error/NotFound";
import Home from "./screens/home/Home";
import Mascotas from "./screens/mascotas/Mascotas";
import MascotaVer from "./screens/mascotas/MascotaVer";
import Razas from "./screens/raza-screen/Razas";
import Tipos from "./screens/tipos/Tipos";
import Citas from "./screens/citas/Citas";

function App() {
  return (
    /**Router: componente que funciona como envoltura, para activar el sistema de eenrutamiento */
    <Router>
      <Header />
      {/* Routes > es en vez del SWITCH, componente que sirve para mostrar o redirigir a las diferentes rutas o paginas */}
      <Routes>
        {/* Route: componente que indica a que ruta se va a ir al hacer click */}
        {/* El orden de las Rutas, se coloca desde las mas especificas (Otras rutas) a el mas generales (HOME) */}
        {/* Donde:
            el mas general es > HOME, MASCOTAS, RAZAS, TIPOS ETC
            y el mas especifico es como crear una SUB_RUTA /mascotas/crear/...
        */}
        <Route path={"/mascotas/:mascota_id"} element={<MascotaVer/>} />
        <Route path={"/mascotas"} element={<Mascotas />} />
        <Route path={"/razas"} element={<Razas />} />
        <Route path={"/tipos"} element={<Tipos />} />
        {/* Comonente HOME: este respondera al local host  */}
        <Route path={"/"} element={<Home />} />
        <Route path={"/citas"} element={<Citas/>}/>
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
