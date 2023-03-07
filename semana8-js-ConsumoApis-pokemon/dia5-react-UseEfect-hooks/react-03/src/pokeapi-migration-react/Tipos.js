import React, { useEffect, useState } from "react";
import { URL_BACKEND } from "../environments/Environments";

const Tipos = ({ modificarUrl, url }) => {
  console.log("Mostrando componentes Tipos");
  const [types, setTypes] = useState([]);

  const getTipos = async () => {
    console.log("Ejecutando llamada asincrona en funcion getTipos");
    const peticion = await fetch(`${URL_BACKEND}/type`);
    const data = await peticion.json();
    //console.log(data);
    setTypes(data.results);
  };

  useEffect(() => {
    console.log("Ejecutando efecto");
    getTipos();
  }, []);
  console.log("Antes de mostrar la vista");

  return (
    <aside className="col-md-2 tipos">
      {types.map((tipo) => {

        //para colorear la clase active en la lista
        let clase = tipo.url === url ? 
                                                "tipos__tipo text-center mb-2 px-3 py-3 active":
                                                "tipos__tipo text-center mb-2 px-3 py-3"
        console.log("Mapeando los tipos de pokemon");
        return (
          <div
            className={clase}
            key={tipo.name}
            onClick={() => {
              modificarUrl(tipo.url)
            }}>
            {tipo.name}
          </div>
        );
      })}
    </aside>
  );
};

export default Tipos;
