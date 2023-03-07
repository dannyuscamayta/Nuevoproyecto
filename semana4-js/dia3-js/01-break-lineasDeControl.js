/**
LA SENTENCIA BREAK: determina el fin de una estructura
ITERATIVA, (for, while, do-while, switch) 
cuando se utliza? 
todo va a depender de la logica que se utiliza

*/

/**
* es un algoritmo que recorre un arreglo hasta que encuentra un numero 0,
entonces el algoritmo se detiene


*/

const edades = [20, 12, 2, 15, 35, 0, 58, 25, 95, 3];
//     contador ---  contador menor a .length--- c se agrega mas 1;
for (let c = 0; c < edades.length; c++) {
    if (edades[c] === 0) {
        break;
    }
    console.log(edades[c]);
}




