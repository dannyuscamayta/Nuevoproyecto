/**
** MATHS:
**La clase MATHS nos ayuda a trabajar con muchas fucniones matematicas

para usar la clase maths y sus metodos o propiedades,  no se necesita crear un objeto.

*/

//Math.random();
//retorna un numero aleatorio entre 0 y 1;
// de clase estatica.

console.log(Math.random());

let aleatorio = Math.random();
console.log(aleatorio);

console.log("=================");
/**
Retornar un numero aleatorio entre min y max
Math.random() * (max - min) + min;
*/

let aleatorioEntre50y100 = Math.random() * (100 - 50) + 50;
console.log(aleatorioEntre50y100);

console.log("=================");

/***
obtener el piso de un numero 
es obtener la parte entera proxima inferior de un numero decimal
ejem
16.99 = 16
5.85 =5
**Math.floor();


*/


console.log(Math.floor(5.98));


console.log("=================");

/**
Obtener el techo de un numero decimal
Math.cei();
*/

console.log(Math.ceil(52.01));


console.log("=================");

/**
Redondear un numero de forma clasica
Math.round(numero_decimal);
*/

console.log(Math.round(52.3));

console.log("=================");


