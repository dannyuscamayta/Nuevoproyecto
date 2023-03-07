/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import HookEffect from './components/HookEffect';
import "./App.css";
import Header from "./pokeapi-migration-react/Header";
import Tipos from "./pokeapi-migration-react/Tipos";
import Pokemones from "./pokeapi-migration-react/Pokemones";

const App = () => {

  
  const [pokemones, setPokemones] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/type/1/");

  console.log("Mostrando componente App");
  const modificarUrl = (nuevaUrl) => {
    //console.log("Nueva url" + nuevaUrl);
    setUrl(nuevaUrl)
  }

  console.log("Creando funcion que llame a la url");
  const llamarUrl = async () => {
    const peticion = await fetch(url);
    const data = await peticion.json();

    const arregloPokemones = data.pokemon.map(registro => {
      return {...registro.pokemon}
    })
    // console.log(data);
    setPokemones(arregloPokemones);
  }

  useEffect(() => {
    
      llamarUrl();
    
  }, [url]);

  return (
    <>
    <Header/>
      <main className="container-fluid mt-5">
        <div className="row">
          <Tipos modificarUrl={modificarUrl} url={url}/>
          <Pokemones pokemones = {pokemones}/>
        </div>
      </main>
    </>
  );
};

export default App;
