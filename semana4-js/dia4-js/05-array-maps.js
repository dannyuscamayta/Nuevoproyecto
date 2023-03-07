/**
**Map:
Es una funcion propia de los arreglos y el comportamiento es muy similar
a la funcion FILTER, sin embargo, el la funcion Map, se retornan siempre, 
*! retornan todos los elementos del arreglo (modificar todos o algunos elementos)
** xq su objetivo principal es ARMAR UN NUEVO ARREGLO
* con algunos o todos los elementos modificados.

*/

const numeros = [16, 5, 48, -11, 79, 2, -9, 25, -3, 17, 54, 13, 0, 19];

let respuesta = numeros.map((elemento, i) => {
    //return elemento * 2 //para arreglar el bug que retorna tdos los elementos se tendria que hacer

    if (elemento > 0) {
        return elemento * 2;
    } else {
        return elemento;
    }

    // if (elemento > 0) {
    //     return elemento;
    // }
});

console.log(respuesta);



