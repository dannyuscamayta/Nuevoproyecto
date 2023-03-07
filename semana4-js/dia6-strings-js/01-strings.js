/**
**LOS STRINGS Y SUS PROPIEDADES

*/

let frase = "Mas sabe el diablo por viejo, que por diablo!! 🤩🤗";
console.log(frase);

console.log("========================");
/**
*? STRING.LENGHT: 
Obtiene el tamaño de caracteres en una cadena (esto incluye sus espacio en blanco)
*/
let longitud = frase.length;
console.log(`La longitud de la frase es ${longitud}`);

console.log("========================");
/**
*? STRING.toLowerCase(): 
Retorna lamisma cadena con todos sus carcteres en minusculas
*! ojo;
no transforma la cadena inicial (no lo formatea)
*/

let enMinuscula = frase.toLowerCase();
console.log(`La frase en minuscula es: ${enMinuscula}`);

console.log("========================");
/**
*? STRING.toUpperCase(): 
Retorna lamisma cadena con todos sus carcteres en mayusculas.
*! ojo;
no transforma la cadena inicial (no lo formatea)
*/
let enMayuscula = frase.toUpperCase();
console.log(`La frase en mayuscula es: ${enMayuscula}`);


console.log("========================");
/**
*? STRING[position]: 
Se puede manejar a un string como un arreglo es decir
** podemos acceder a un strings desde sus posiciones con un valor numerico
*/
let posicion5 = frase[5];
console.log(`La posicion 5 de la frase es: ${posicion5}`);


console.log("========================");
/**
*? STRING.substr(posicion:inicial, cantidad_de_caracteres): 
Retorna una sub-cadena, desde la posicion inicial, se cuenta una cantidad de caracteres a la derecha
*/
let subCadena = frase.substr(5, 2);
console.log(`El substring de la frase es: ${subCadena}`);


console.log("========================");
/**
*? STRING.substring(posicion:inicial, posicion_final): 
Retorna una sub-cadena, desde la posicion inicial, hasta un caracter antes de la posicion  final
*/
let subCadena2 = frase.substring(5, 10);
console.log(`El substring de la frase es: ${subCadena2}`);


console.log("========================");
/**
*? STRING.includes("cadena"): true ó false
Retorna TRUE si es que la cadena pasada por los parametros esta dentro de la cadena esta COMPLETA,
Retorna FALSE si la cadena no es parte de la frase completa
*/
let existeViejo = frase.includes("viejo");
console.log(`la palabra que si se sincluye en la frase es: ${existeViejo}`);

console.log("========================");
/**
*? STRING.indexOf("cadena", opcional_posicion_inical): 
Retorna, la posicion en la que la cadena inicia dentro de la frase.
en caso de que no exista dicha sub-cadena, retorna menos -1
*! OJO:
si se envia un segundo parametro (opcional), (parametro_cadena, posicion_inicial )
la sub-cadena se busca desde la posicion de dicho parametro  
*/
let posicionViejo = frase.indexOf("viejo");
console.log(`La posicion de la palabra en la frase es: ${posicionViejo}`);


console.log("========================");
/**
 * una forma de buscar la posicion.indexOf ("cadena") PERO DE VARIAS PALABRAS

*/
const posicionesDiablo = () => {
    let posicionEncontrada = 0;
    //frase inicial
    // let fraseTemporal = frase;

    while (true) {
        // fraseTemporal = fraseTemporal.substring(posicionEncontrada, fraseTemporal.length);
        posicionEncontrada = frase.indexOf("diablo", posicionEncontrada);
        if (posicionEncontrada !== -1) {
            console.log(`Encontrado en la posición: ${posicionEncontrada}`);
            posicionEncontrada++;
        } else {
            break;
        }
        
    }
};

posicionesDiablo();



/**
==============================
funcion que imprime la cantidad de vocales de una frase, sin importar
que estas sean mayusculas y minusculas,

2.- funcion que imprime la cantidad de palabras que tenga una frase


3.- funcion que imprime si una frase es un PALINDROMO;

que es un palindromo? => una frase que se lee igual al derecho y al revez.
Si se considera quitando los espacios en blanco!

ejemplos: 
anita lava la tina,
amor a roma,
la ruta natural

*/

/**
**string.trim()
retorna la misma cadena sin incluir los espacios en blanco
**tanto al FINAL como al INICIO
**No los espacios intermedios
*/

let frase2 = "  La frase de los dias de gloria  ";
console.log(frase2);
console.log(`${frase2.trim()}`);

