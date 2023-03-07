// const buscarPorDni = (dni, callback) => {
//      let respuesta = {};

//      //Proceso asincrono
//      setTimeout(() => {
//           respuesta = {
//                nombre: "Jorge Garnica Blanco",
//                fechaNac: "08-09-1991",
//           };
//           callback(respuesta);

//      }, 1000);

//      return respuesta;
// };

// const resultado = buscarPorDni("47548520", (rspta) => {
//      console.log(rspta);
// });
// console.log(resultado);

//Se borraron los console log y el return
// =========fin del ejemplo============

// const buscarPorDni = (dni, callback) => {
//   let respuesta = {};

//   //Proceso asincrono
//   setTimeout(() => {
//     respuesta = {
//       nombre: "Jorge Garnica Blanco",
//       fechaNac: "08-09-1991",
//     };
//     callback(respuesta);
//   }, 1000);
// };

// buscarPorDni("47548520", (rspta) => {
//   console.log(rspta);
// });

// =========Fin segundo ejemplo================

const buscarPorDniProblema = (dni) => {
  let respuesta = {};

  //Proceso asincrono
  setTimeout(() => {
    respuesta = {
      nombre: "Jorge Garnica Blanco",
      fechaNac: "08-09-1991",
    };
  }, 1000);

  return respuesta;
};

/**
 * La variable resultado siempre sera un objeto VACIO,
 *dado qque la funcion buscarPorDniProblema, espera 2 segundos en setear dicha variable
 *pero por asincronia, el retorno de la variable respeusta, es inmediato
 */

let resultado = buscarPorDniProblema("47548520");
console.log(resultado);

//---------------------------------------------------------------------
// Posible solución a la asincronía
// enviar un callback para recibir en él, el resultado de la búsqueda

const buscarPorDni = (dni, callback) => {
  let respuesta = {};

  setTimeout(() => {
    respuesta = {
      nombre: "Jorge Garnica Blanco",
      fechaNac: "08-09-1991",
    };
    callback(respuesta);
  }, 2000);
};

buscarPorDni("47548520", (res) => {
  console.log(res);
});
