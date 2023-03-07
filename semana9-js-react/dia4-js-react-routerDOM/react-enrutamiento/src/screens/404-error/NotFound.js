import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  //funcion para el boton goHOme
  // los componentes renderizado  por una ruta recibe unas props, (<route></route>) recibe por defecto para,metros de navegación  en las props
  const goHome = useNavigate();
  // const goHome = () => {
  //    console.log();
  // };

  return (
    <main className="container text-center">
      <h1 className="display-2 text-center mt-5">Error - ups 😢</h1>
      <hr />
      <button
        className="btn btn-outline btn-primary"
        onClick={() => {
          goHome("/");
        }}
      >
        Ir a la pagina principal
      </button>
    </main>
  );
}

export default NotFound;
