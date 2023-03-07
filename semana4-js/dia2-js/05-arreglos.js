/**
ARREGLOS EN JS
=> son variables, tambien conocidos como arrays
donde se pueden guardar todo tipo de datos: booleans, strings, numericos, etc
pero lo mas conveniente es guardar un solo tipo de dato,
las posiciones se cuenta desde el numero "0";
let x = [5, -1, 11, 777]

propiedades;
para obtener la cantidad del numero de datos se puede hacer
console.log(x.length); // esto devolvera que el arreglo "x" tiene 4 elementos 
para imprimir el ultimo elemento de un arreglo se usa el 
console.log(x [x.length - 1]); // esto dara como respuesta el penultimo numero ya que esta restandose del ultimo numero menos 1
para recorrer un arreglo?
for (let c = 0; c < x.length; c++) {
console.log(x [c]);
}

*/

const numeros = [5, -1, 11, 777];
//para imprimir todos los elementos de un array dado su pocision.
console.log(numeros [1]);

console.log("imprimir todos los numeros del arreglo");

//para imprimir todos sus elementos (inclusivo)
for (let c = 0; c < numeros.length; c++) {
    console.log(numeros[c]);
}

//para imprimir todo el arreglo
console.log("imprimir todo el arreglo");
console.log(numeros);

//Imprimir el tamaño del arreglo o la cantidad de elementos que tiene
console.log("imprimir la cantiodad del numero de elementos del arreglo");
console.log(numeros.length);
