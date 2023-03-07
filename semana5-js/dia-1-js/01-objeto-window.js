/**
**Objeto window
es un objeto creado automaticamente por el navegador

En el se encuentra todas las funciones y propiedades para manipular el DOM y demas 
caracteristicas del navegador


**Propiedades
window.document => propiedad que manipula el DOM
window.innerwith => propiedad que retorna el ancho de ls ventanas en pixeles
window.innerheight => propiedad que retorna el alto de la ventana en px.

*/

const ancho = window.innerWidth;
const alto = window.innerHeight;

console.log(`Ancho: ${ancho}`);
console.log(`alto: ${alto}`);

/**
*!ojo
pueden usarse propiedades del objeto window sin mencionar a dicho objeto
en lugar de colocar WINDOW.INNERWIDTH, se coloca solo INNERWIDTH
todos los objetos cuando usamos un navegador se sobre entiende que el objeto window esta ahi
*!caso
**console.log();
**prompt();

*/


