/**
 *FETCH = es una funcio que cponsume datos de un ENDPOINT que es pasado
 *como un parametro, la funcion FETCH retorna una promesa cuando el resultado
 *esta listo por mostrar
 */

fetch("https://reqres.in/api/users").then((peticion) => {
  console.log(peticion);
  peticion.json().then((json) => {
    console.log(json);
  });
});

//const promesaFetch = fetch("https://reqres.in/api/users");

// promesaFetch.then((respuesta) => {
     // console.log(respuesta);
//      respuesta.json().then((data) => {
//           console.log(data);
//      })
// });
