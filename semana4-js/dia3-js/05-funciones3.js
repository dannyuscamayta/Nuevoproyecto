/**
FUNCIONES QUE RETORNAN PARAMETROS


*/

//funcion de un factorial de un numero
/**
 * funcion que retorna el factorial de un numero
 *
 * @param {*} numero parametro de entrada al que se le va a calcular el factorial de un numero
 */

function factorial(numero) {
    let rpta = 1;
    for (let c = numero; c > 0; c--) {
        rpta = rpta * c;
    }
    // se le esta cambiando el console.log por return: que hara que la funcion retorne una respuesta
    //esta retorna no en consola, sino hasta donde se le a evocado, osea en el factorial (6)
    return rpta;
    // console.log(rpta);
}

// console.log(factorial(6));

//otra forma de obtener el resultado del factorial 
// es hacer una variable let con el valor de resultado
let resultado = factorial(6);
// y despues un console.log
console.log(resultado);



