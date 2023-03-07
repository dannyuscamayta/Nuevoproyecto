/**
**Creación de elementos en el DOM
*? document.createElement("nombre_de_la_etiqueta")

retorna la referencia a un elemento que aún no está presente en el DOM
pero este será agregado en lo posterior por el javascript

*/

const titulo = document.createElement("h1");
//console.log(titulo);
titulo.innerText = "Titulo de mi App"
//console.log(titulo);

/**
Agregando elementos o etiquetas al DOM como hijos o padres de un elemento
**element.appendChild(elemento)
agrega un elemento creado a un elemento padre
si el elemento no existia en el DOM, ahora va a estar como un hijo del elemento

*/

const header = document.getElementById("header");

header.appendChild(titulo);

//titulo.innerText = "CodiGo - Bootcamp";