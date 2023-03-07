/**
 * Formas modernas y reducidas de retornar valores en funciones
 * 
 */

const sumar = (a, b) => {
     return a + b;
};

console.log(sumar(50, 19));

//Forma reducida: 
// Aclaracion, si la funcion tiene una sola linea de desarrollo 
// el retorno es implicito si lo colocamos entre parentesis (), 
//
const sumarReducido = (a, b) => (a + b);
console.log(sumarReducido(40, 20));

//Forma reducida de hacer Filter
let nombres = ["jorge", "juancito", "jeremias", "vladimir", "mariel", "jesus"];
//Filtrar todos los nombres que inicien con una letra "J",

let filtroTradicional = nombres.filter((n) => {
     if (n.charAt(0) === "j") {
          return n;
     }
});

console.log(filtroTradicional);

//forma reducida

let filtroReducido = nombres.filter((n) => n.charAt(0) === "j");
console.log(filtroReducido);