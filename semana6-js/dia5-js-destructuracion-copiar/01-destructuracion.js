/**
Destructuracion de arreglos: es una manera directa de obtener acceso
a las posiciones y elementos de los arreglos

*/

let nombres = ["jorgito", "Carmencita", "Pepito", "Carlita", "Luisito"];

// esto es DESTRUCTURAR
let [primero, segundo, , , ultimo] = nombres;

console.log(primero);
console.log(segundo);
console.log(ultimo);

//Ejemplos:
/**
 * Funcion que retorna un arreglo de dos elementos [lat, lng]
* @param {*} ciudad
 */
const getCoordsByCiudad = (ciudad) => {
     // es una funcion falsa
     console.log("buscando........");
     return [-16.4141, -70.43516];
};

// let resultado = getCoordsByCiudad("Puno");

// //console.log(resultado);
// let latitud = resultado [0];
// let longitud = resultado [1];
// //Imprimiendo
// console.log(latitud);
// console.log(longitud);

// Resumiendo la linea 27 let resultado
let [latitud, longitud] = getCoordsByCiudad("Puno");
console.log(latitud);
console.log(longitud);

//OTRA FORMA DE DESESTRUCTURAR
//el operador rest(...), devuelve un arreglo  de todos los elementos de un arreglo
//en el ejemplo, sera un arreglo de todos los elementos menos el primer elemento

let [nombre1, ...resto] = nombres;
// El operador REST(...) solo puede ser el ultimo elemento destructurador
console.log(nombre1);
console.log(resto);