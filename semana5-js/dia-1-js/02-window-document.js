/**
**WINDOW.DOCUMENT
esto es igual al DOCUMENT : se puede atrapar elementos del DOM
*!atrapar o capturar a los elementos en una variable ltet, const

*? document.getElementById("id_del_elemento_en_el_DOM") 
retorna una referencia al elemento del DOM con el ID proporcionado

cualquier elemento puede tener clase en el html o tambien un ID
el ID nunca se debe repetir

*/
//para que el elemento document no sea implicito se debe guardar en una variable llamada HEADER
const header = document.getElementById("header");
console.log(header);

console.log("===================");
/**
Hay otra opcion de CAPTURAR elementos
**document.getElementsByClassName("nombre_de_la_clase_en_comun")
retorna un arreglo (array) de elementos que en el DOM , tenga el mismo 
**nombre de la clase

*/
const cajas = document.getElementsByClassName("caja");
console.log(cajas);

console.log("===================");

console.log(cajas[0]);


console.log("===================");
//cajas.forEach((elemento) => {
//    console.log(elemento);
//});

/**
El codigo anterior con la funcion forEach, deberia salir un error, 
xq no es un arreglo NATIVO, por ende, no tiene todas sus funciones

pero si es posible convertir este div en un arreglo
*! Tip:
como convetir un HTML collection o cualquier otra estructura que tenga
la forma de un arreglo, a un arreglo nativo?

*/
const cajasArray = Array.from(cajas);
console.log(cajasArray);


console.log("===================");
/**
**document.querySelector("selector_tipo_CSS")
devuelve el primer elemento o unico elemento que coincida con el selector
**document.querySelectorAll("selector_tipo_CSS")
Devuelve todos los elementos que coincidad con el selector (mas se usa este elemento)

se puede capturar elementos del DOM pero del tipo CSS, es decir que se puede 
capturar haciendo referencia al body en torno al CSS (selectores)


 */

const main = document.querySelector("#main");
console.log(main);

console.log("===================");

/**
Todos los elementos retornados por los distintos SELECTORES
son de tipo "ELEMENT"



*/
