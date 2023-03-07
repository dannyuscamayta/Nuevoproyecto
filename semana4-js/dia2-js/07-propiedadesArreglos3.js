/**
PROPIEDADES DE ARREGLOS

let arreglo = [1, 25, 51, 12, 36, 11];
let arreglo = [dan, jerry, juan, love, lolo];
let arreglo = [true, false, false, true];
let arreglo = [[1, 2], [3, 4], [5, 6], [7, 8]];
ejejmplo: de como se podria imprimir en consola el arreglo 5
console.log([2]);
*/

// let arreglo = [[1, 2], [3, 4], [5, 6], [7, 8]];
// //ejemplo: de como se podria imprimir en consola el arreglo 2y su primera posicion
// console.log(arreglo[2][0]);

//Algoritmo para calcular la cantidad de numeros negativos positivos
//negativos e iguales a cero
let arreglo = [1, -140, 4, 0, 5, 7, -9, 0, -6];

let p = 0;
let n = 0;
let z = 0;

for (let c = 0; c < arreglo.length; c++) {
  if (arreglo[c] > 0) {
    p++;
  } else {
    if (arreglo[c] < 0) {
      n++;
    } else {
      z++;
    }
  }
}

//final del ciclo for se hace fuera del ambito
console.log(`Positivos ${p}`);
console.log(`Negativos ${n}`);
console.log(`Iguales a cero ${z}`);

