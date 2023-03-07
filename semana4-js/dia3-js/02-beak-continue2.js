/*LA SENTENCIA CONTINUE : interrumpe la iteracion que se
encuentra desarrolando una estructura repetitiva,
sin embargo hace que se continue con la siguiente ITERACION.

*/

/**
* es un algoritmo que recorre un arreglo hasta que encuentra un numero 0,
entonces el algoritmo se detiene


*/

const edades = [20, 12, 2, 15, 35, 0, 58, 25, 95, 3];
//     contador ---  contador menor a .length--- c se agrega mas 1;
for (let c = 0; c < edades.length; c++) {
    if (edades[c] === 0) {
        continue;
    }
    console.log(edades[c]);
}
