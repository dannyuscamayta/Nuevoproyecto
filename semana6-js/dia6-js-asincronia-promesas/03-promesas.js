/**
 *Una promesa es un objeto que sirve para esperar a que termine un proceso asincrono,
 *y depende de la respuesta del proceso de como se resuelva la promesa
 */

//Creando una promesa ---> new Promise ();

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    let x = 100;

    //Yo necesito retornar el valor de x
//     resolve(x);
    //resolve sirve para transmitir un VALOR a traves de la promesa
    //luego de que un proceso asincrono se haya ejecutado
    reject("Ocurrio un error!!")
  }, 3000);
});

//EJECUTANDO una promesa
//then = se ejecuta cuando la promesa INVOCA a la funcion RESOLVE y en 
//un callback recibo la respuesta
miPromesa.then((respuesta) => {
     console.log(respuesta);
}).catch((error) => {
     console.log(error);
});
