/**
OPERADORES DE JS:
ESTOS SON ARITMETICOS Y SE USA TAMBIEN EN EXEL

SUMA = +
RESTA = - 
MULTIPLICACION = *
DIVISION = cociente de la division = /
MODULO = residuo de la division = %

POTENCIA = **



*/

let a = 60;
let b = 20;
let division = a / b;
let modulo = a % b;


console.log(`division ${a } / ${b} = ${division}`);
console.log(`modulo ${a } % ${b} = ${modulo}`);

/**
operadores adicionales 

Incremento -->   +=;
Decremento -->   -=;

Incremento en una unidad -->  ++;
Decremento en una unidad --> --;

Las variables no se deben declarar dos veces en la misma hoja 
esta va aproducir un error


*/
// Con el DEBUGGER se puede empezar a depurar el programa
// significa que será un punto de interrupcion, permitiendonos ir paso x paso!
// se puede "DEBUGGEAR" se puede detener la operacion justo en la linea que queramos
//para ver los errores del codigo


// debugger;

let numero = 50;
let numero2 = 100;
// esto da a entender que el valor del numero 1, se va a perder
// xq este numero se va a chancar, o se va a sumar creando un nuevo resultado

// numero = numero + numero2 (es lo mismo decir)=> numero += numero2
// ó numero *= numero2 (es igual decir que ) => numero = numero * numero2
numero = numero + numero2;
console.log(numero);

numero2 ++;
console.log(numero2);

numero2 --;
console.log(numero2);
