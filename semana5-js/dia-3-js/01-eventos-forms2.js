const mensaje = document.getElementById("mensaje");
const pais = document.getElementById("pais");
const helper = document.getElementById("helper");




/**
**Eventos on[];  todos estos eventos se dan cuando el usuario presiona el teclado

**onkeyup = evento que se dispara o aparece cuando una tecla es soltada luego de presionarla ╦
     mensaje.onkeyup = (evento) => {
     console.log(evento);
     }

**onkeydown = evento que se dispara cuando una tecla esta presionada ╩

**onkeypress = es como una unión de ambbos eventos (onkeyup, y onkeydown)
*/

mensaje.onkeyup = (evento) => {
     //console.log(evento);
     //console.log(mensaje.value);
     //console.log(mensaje.value.length);

     if (mensaje.value.length >= 130) {
          mensaje.value = mensaje.value.substr(0, 130);
     }

     const cantidad = 130 - mensaje.value.length;
     helper.innerText = `${cantidad} caracteres`;

}

/***
**Funcion ONCHANGE
**onchange: Funcion que se ejecuta cada vez que un elemento cambia de valor.

*/

pais.onchange = (evento) => {
     console.log(evento);
     console.log(pais.value);
}


