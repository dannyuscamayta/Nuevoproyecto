//  ejemplo si un nuemro es positivo o negativo
/**
Ambito de una variable: 
ambito local
let : crea una variable en le ambito en el que se encuentra: 
    el ambito es conocido como el scope
    las llaves {} amrillas encierran un ambito
    y las otras llaves encierran OTRO ambito

en el ambito global: no existiria una respuesta
xq los ambitos locales solo crean para su ambito

la variable NUM al estar en un ambito global o superior, 
existe en el ambito del if?
la respuesta seria que SI, si seria correcto
pero esta respuesta tendria que estar en el ambito global {} unas
llaves en general se tendria que poner para cerrar el ambito global


*/

const num = -48;

// la solucion al console.log() del final seria con un let = "" campo vacio al inicio
let  respuesta = "   ";


if (num >= 0) {
  respuesta = "Si es posistivo";
//   console.log(respuesta);
} else {
  respuesta = "No es positivo";
//   console.log(respuesta);
}

console.log(respuesta);
