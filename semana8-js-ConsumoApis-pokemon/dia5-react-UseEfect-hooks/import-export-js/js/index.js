/**
Importando variables que han sido exportadas individualmente
NOTA: se usa los {} cuando las variables son exportadas individualmente
*/

import { URL_BACKEND, API_KEY } from "./variables.js";

//Importando un elemento x defecto del archivo funciones.js
//NOTA: los elementos exportados como default, no llevan el signo de {};
//NOTA: pueden ser recibidos o importados con cualquier nombre o renombrados


import funcionDespedida, {saludar} from "./funciones.js";
// importando una funcion exportada indivudualmente asignandole un nuevo nombre
import {persona as construirPersona} from "./persona.js"

let objPersona = construirPersona("Daniel", 36, "Uscamayta", "424845454");
console.log(objPersona);

objPersona.asignarEdad(50);
console.log(objPersona);

console.log(URL_BACKEND);
console.log(API_KEY);

saludar();
funcionDespedida();