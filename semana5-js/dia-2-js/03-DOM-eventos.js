/**
**los eventos son sucesos que ocurren cuando un elemento es afectado por una acción ejem:
* Click: pasar el mouse por encima de un elemento
* Presionar una tecla: o mantener presionado
* Escribir algo sobre algun elemento (input) etc...

*/

/**
Como se debe configurar un EVENTO
Forma 1: 
**elemento.on[evento] = () => {};
Forma 2:
**elemento.addEventListener("[evento]", () => {});

*/
let contador = 0;
const textoContador = document.getElementById("textoContador");

const btn1 = document.getElementById("btn1");
//Como la forma 1:
btn1.onclick = () => {
     //console.log("Ups! me hicieron click");
     contador++;
     textoContador.innerText = contador;
};

/**
**Informacion que trae un evento
* e = event
informacion que produce un evento:
**evento.target = retorna el elemento en el que sucede el evento

*/
const btn2 = document.getElementById("btn2");
btn2.onclick = (evento) => {
     console.log(`**evento.target**`);
     console.log(evento.target);
     /**
     **evento.clientx = coordenada en X con respecto al VIEWPORT en px en donde se hizo click
     **evento.clienty = coordenada en Y con respecto al VIEWPORT en px en donde se hizo click
     */
     console.log(`** evento.clientX **`);
     console.log(evento.clientX);

     console.log(`**evento.clientY**`);
     console.log(evento.clientY);

     /**
     **evento.offsetX = coordenada en X respecto del elemento en px en donde se hizo click
     **evento.offsetY = coordenada en Y respecto del elemento en px en donde se hizo click
     */
     console.log(`**evento.offsetX**`);
     console.log(evento.offsetX);

     console.log(`**evento.offsetY**`);
     console.log(evento.offsetY);

     /**
     **evento.altkey = retorna True si el evento ha sido apretado o ejecutado con la ayuda de la tecla ALT, caaso contrario retorna FALSE-
     */

     console.log(`**evento.altkey**`);
     console.log(evento.altKey);

};