/**
*** FILTER:
* Filter es una fucion propia de los arreglos, recibe un CALLBACK con los mismos parametros que la funcion FOREACH
* para importantes comentarios ?
* La diferencia es que FILTER retorna un nuevo arreglo con los elementos filtrados
*@param miarametro el parametro para este metodo.
*! -----
*/

const numeros = [16, 5, 48, -11, 79, 2, -9, 25, -3, 17, 54, 13, 0, 19];

// es muy parecido al forEach y su funcion flecha y sirve para filtrar

let resultado = numeros.filter((elemento, i) => {

    if (elemento <= 0) {
        return elemento;
    }
});

console.log(resultado);
