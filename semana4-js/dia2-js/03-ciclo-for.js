/**
CICLO FOR: nos ayuda a controlar el CONTEO;

for (let c = 0; c < 10; c = c + 1) {

}
let c= 0; //esto es la inicializacion
c < 10 ; //esto es la condicion
c = c + 1; // este sera el incremento (++)o decremento (--) 


*/
//primer ejercicio es que C llegue a 14 sumando de uno en uno
// for (let c = 0; c < 15; c++) {
//     console.log(c);
// }

//Se esta creando una tabla de multiplicar:
// for (let c = 0; c < 10; c++) {
//     console.log(`12 x ${c} = ${12 * c}`);
// }

//=========================================
//crear un algoritmo para multiplicar 2 numeros, Sin utlizar el signo
//de asterisco * de multiplicacion
//

//====================================

let a = 10;
let b = 9;

let sumatoria = 0;

for (let c = 0; c < a; c++) {
    // que numero se tiene que sumar 10 veces = esto sera "b"
    sumatoria = sumatoria + b;

}

console.log(`${a} x ${b} = ${sumatoria}`);

//=================================
let d = 10;
let e = 9;

let suma = 0;

for (let c = 0; c < e; c++) {
    // que numero se tiene que sumar 10 veces = esto sera "b"
    suma = suma + d;

}

console.log(`${d} x ${e} = ${suma}`);
