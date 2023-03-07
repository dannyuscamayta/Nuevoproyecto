import React, { useState } from "react";


const Contador = () => {
  // let c = 0;
  // esto es lo mismo a decir lo del codigo de abajo;
  // const arreglo = useState(0);
  // const c = arreglo[0];
  // const actualizarC = arreglo[1];

  const [c, actualizarC] = useState(0);
  console.log("Ejecutando el componente contador...!");

  const restar = () => {
    // console.log("Restando...!");
    // c--; 
    // console.log(c);
    actualizarC (c - 1);
  };

  const sumar = () => {
    // console.log("Sumando...!");
    // c++;
    // console.log(c);
    actualizarC( c + 1);
  };

  return (
    <div>
      <button onClick = {() =>{
        restar();
      }}>-1</button>
      {c}
      <button onClick = {() => {
        sumar();
      }}>+1</button>
    </div>
  );
};

export default Contador;
