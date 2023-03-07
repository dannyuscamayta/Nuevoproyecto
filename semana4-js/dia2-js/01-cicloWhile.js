/** CICLO WHILE
HACER UN ALGORITMO PARA LEER "N" NUMEROS

y al final del proceso mostrar la sumatoria de todos los numeros

while: la variable es como un contador o acumulador


*/

const n = 10;

let c = 0; 
// la sumatoria sera la acumulacion de todos los nuemros
let sumatoria = 0;

while (c < n) {

    let nro = +prompt("Ingrese un numero");
    console.log(`Usted ingreso ${nro}`);
    sumatoria = sumatoria + nro;

    c = c + 1;

}

console.log(`La sumatoria total es ${sumatoria}`);




