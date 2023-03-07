/*
FUNCIONES ANONIMAS

NUEVO ESTANDAR DE LAS FUNCIONES
donde vienen a existir las llamadas funciones anonimas

estas son funciones, simplemente
estas se guardan en variables
*/
//=================================
// function tablaDeMultiplicar(numero) {
//   for (let c = 0; c <= 10; c++) {
//     console.log(`${c} x ${numero} = ${c * numero}`);
//   }
// }
//===================================
/**
 * esta funcion estara guardada en la funcion tablaDeMultiplicar 

en vez de let se le esta colocando CONST, xq es una buena practica, 
xq la funcion como tal nunca va acambiar 
// en tiempo de ejecucion, 
 */
//let tablaDeMultiplicar = function (numero) => {

const tablaDeMultiplicar = (numero) =>{
  for (let c = 0; c <= 10; c++) {
    console.log(`${c} x ${numero} = ${c * numero}`);
  }
};

tablaDeMultiplicar(11);



