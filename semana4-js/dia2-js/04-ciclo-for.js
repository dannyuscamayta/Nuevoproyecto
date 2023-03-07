/**
HACER UN ALGORITMO PARA CALCULAR EL FACTORIAL DE UN NUMERO
Ejem: 
factorial de 5 = 5 x 4 x 3 x 2 x 1 =120
factorial de 4 = 4 x 3 x 2 x 1 = 24

en este caso no convenia epezar con cero

*/

let productoTotal = 1;
const nro = 5;
for (let c = nro; c > 0; c--) {
    productoTotal = productoTotal * c;
}

console.log(`La respuesta del producto total es ${productoTotal}`);

