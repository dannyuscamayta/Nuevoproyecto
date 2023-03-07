import React, { useState } from "react";
import Contador from "./components/Contador";
import "./App.css";
import Productos from "./components/Productos";
import Carrito from "./components/Carrito";

const App = () => {

  const [canasta, setCanasta] = useState([]);

  const agregarCanasta = (id) => {
    // console.log("Agregando a canasta");
    // console.log( `ID: ${id}`);

    let objProducto = productos.find((p) => (p.id === id));
    //let objProducto = productos.find(p => p.id === id);
    // console.log(objProducto);
    // es lo mismo que este cod:
    //if (p.id === id) {
    // return p;
    // }
    let copiaCanasta = [...canasta];

    //revisar si el prodcto ya existia en la canasta de productos
    let productoExistente = canasta.find((p) => (p.id === id));
    if (productoExistente) {
      copiaCanasta = copiaCanasta.map((p) => {
        if (p.id === id) {
          p.cantidad += 1;
          return p;
        } else {
          return p;
        }
      })
    } else {
      copiaCanasta.push({...objProducto, cantidad: 1});
    }


    setCanasta(copiaCanasta);
  };

  const eliminarProducto = (id) => {
    /**
    * 1.- obtener una copia de la canasta
    * 2.- en la copia canasta, filtrar todos los elementos con id diferente al que recibo x parametros
    * 3.- finalmente, actualizar la canasta con la funcion setCanasta, con los nuevos valores
    * 4.- no olvidar pasar como props al carrito, la funcion eliminarProducto.
    */
    let canastaCopia = [...canasta];
    canastaCopia = canastaCopia.filter(p => p.id !== id);
    setCanasta(canastaCopia);
  }

  const productos = [

		{ id: 2343, nombre: "Play Station 5", precio: 34454.38 },
		{ id: 542, nombre: "Laptopr Razer", precio: 7000.38 },
		{ id: 44, nombre: "Monitor LG", precio: 500 },
		{ id: 243, nombre: "Mouse gamer", precio: 80 },
	];

  console.log("Ejecutando el componente App");

  return (
    <div>
      <Contador />
      <hr />
      <Productos productos = {productos} agregarCanasta = {agregarCanasta}/>
      <Carrito canasta = {canasta} eliminarProducto = {eliminarProducto}/>
    </div>
  );
};

export default App;
