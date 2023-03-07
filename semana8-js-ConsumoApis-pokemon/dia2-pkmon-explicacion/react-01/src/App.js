import React from "react";
//para llamar al header se tiene que importar
import Header from "./components/Header";
import Articulos from "./components/Articulos";
import "./App.css";

const App = () => {
  const titulo = "Mi primer curso de React";
  const proximosCursos = ["Angular", "Webpack", "NextJS"];
  const articulos = [
    {id: 783, titulo: "¿Como desestructurar objetos?",},
    {id: 33, titulo: "¡Aprende Babel en 10 minutos!",},
    {id: 842, titulo: "¿Que significa DeOps?",},
  ];

  // const cursosJSX = proximosCursos.map((c) => {
  //   return(<li>{c}</li>)
  // });

  return (
    <>
      <Header />
      <main>
        <h1>{titulo}</h1>
        <hr />
        <h2>Proximos cursos:</h2>
        <ul>
          {proximosCursos.map((c, i) => (
            <li key={i + c}>{c}</li>
          ))}
        </ul>
        <hr />
        <Articulos blog = {articulos}/>
      </main>
    </>
  );
};

export default App;

// {proximosCursos.map((c) => {
//   return <li>{c}</li>;
// })}
