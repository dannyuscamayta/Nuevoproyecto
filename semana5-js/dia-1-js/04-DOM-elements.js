/**
**element .classList = retorna o devuelve un ARREGLO de las clases que un elemento tiene (separado por espacios)

**element.classList.add("clase_a_agregar") = agrega una clase a la lista de clases de un elemento.

**element.classList.remove("clase_a_eliminar") = elimina una clase de la lista de clases de un elemento

**element.classList.toggle("clase_interruptor_o_switch") = agrega o quita una clase de un elemento (funciona como un interruptor: es decir cuando esta prendido este lo apaga y cuando esta apagado este lo prende o agrega o quita)

primero se tiene que atrapar un elemento
*/

const header = document.getElementById("header");

console.log("Lista de clases del header");
console.log(header.classList);

header.classList.add("fondo__dark");

const main = document.getElementById("main");
main.classList.remove("fondo__light");

const botonToggle = document.getElementById("btnToggle");
botonToggle.onclick = () => {
     header.classList.toggle("fondo__dark");
}

/**
** elemento.setAttribute("atributo", "valor");
* settea el atributo a un elemento del DOM 
**<etiqueta atributo = "valor"></etiqueta>
*
*/

const link = document.getElementById("link");
//forma 1 : de setear atributos
link.setAttribute("href", "https://www.bingo.com");

//forma 2 : de setar atributos
//esta solo sirve para setear atributos OFICIALES de las etiquetas HTML
// href, src, placeholder, etc...

//link.href = "https://wwww.bingo.com";

//vamos a colocar un atributo que no es OFICIAL en la seccion 1: esto esta mal o daria error
// const secction1 = document.getElementById("seccion1");
// secction1.clave = "1234";

// en este caso se usaria el setAttribute("atributo", "valor")
const section1 = document.getElementById("seccion1");
section1.setAttribute = ("placeholder", "1234");

/**
Analogamente vamos a obtener un valor de un atributo:

**element.getAtribute("nombre_del_atributo");
obtiene el valor de un atributo, de un elemento en el DOM

*/

console.log(botonToggle.getAttribute("id"));

