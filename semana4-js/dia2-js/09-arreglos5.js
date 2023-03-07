/**
Llenar un arreglo con numeros N ingresados por el usuario



*/


const n = 5;

let numeros = [];

for ( let c = 0; c < n; c++) {
    //cuando se va poner nuevos valores es mejor ponerle una nueva variable
    let ingreso = +prompt("Ingrese un número!");
    numeros.push(ingreso);

}

console.log(numeros);


