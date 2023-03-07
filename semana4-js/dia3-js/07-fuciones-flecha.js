/**
FUNCIONES TIPO FLECHA
es como una evolucion o mejoramiento del codigo, es decir se vuelve mucho mas eficiente
esta funcion es para

esta es una funcion ANONIMA, solo que esta escrita en sintaxis de javascript
*/

// const tablaDeMultiplicar = function (numero) {
//     for (let c = 0; c <= 10; c++) {
//       console.log(`${c} x ${numero} = ${c * numero}`);
//     }
//   };

//   tablaDeMultiplicar(11);

// se quito la palbra function y se coloca una flechita => en vez
//de la palabra reservada y todo funcionara igual al ejemplo de arriba
//si en caso no hubiera parametros (numero) esta se coloca en parametro vacio ()
//y tambien funcionaria, y si hay mas parametros, esta se coloca con comas , (1, 2, 3, 4, 5, 6)
//la llamada es la misma de una funcion (tablaDeMultiplicar(11))

const tablaDeMultiplicar = (numero) => {
  for (let c = 0; c <= 10; c++) {
    console.log(`${c} x ${numero} = ${c * numero}`);
  }
};

tablaDeMultiplicar(11);
