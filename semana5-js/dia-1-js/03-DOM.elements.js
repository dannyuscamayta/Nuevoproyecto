/**
**OBJETO ELEMENT y sus propiedades:

*/

const titulo = document.getElementById("title");
console.log(titulo);

/**
Propiedades:
**element.style.[propiedad_CSS]; esto es una propiedad para cambiar el css

*/

titulo.style.color = "orange";
titulo.style.fontSize = "3rem";

const seccion1 = document.getElementById("seccion1");

/**
 **elemento.offsetWidth = devuelve el ancho de un elemento,
 **elemento.offsetHeight = devuelve el alto de un elemento,
 */

const anchoSeccion1 = seccion1.offsetWidth;
const altoSeccion1 = seccion1.offsetHeight;

console.log(`ancho de la seccion 1 ${anchoSeccion1} px`);
console.log(`alto de la seccion 1 ${altoSeccion1} px`);

/**
Para modificar el texto de un elemento
**elemento.innerHTML : setea o retorna el contenido HTML de un elemento, es decir si colocamos etiquetas, estas seran renderizadas.
**elemento.innerText : setea o retorna el contenido a nivel de texto de un elemento

*/

const parrafo = document.getElementById("parrafo");

console.log("contenido HTML del parrafo");
console.log(parrafo.innerHTML);

console.log("contenido textual del parrafo");
console.log(parrafo.innerText);

console.log("===========================");

const parrafo2 = document.getElementById("parrafo2");
const parrafo3 = document.getElementById("parrafo3");

parrafo2.innerHTML = "<strong>COdiGo</strong> <a href='#'>Link1</a>";
parrafo3.innerText = "<strong>COdiGo</strong> <a href='#'>Link1</a>";
