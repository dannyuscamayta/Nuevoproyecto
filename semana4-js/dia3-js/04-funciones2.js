/**
FUNCIONES  que reciben parametros


estos parametros pueden ser reutilizables


js. es un leguaje tipado

*/

function tablaDeMultiplicar (numero){
    for (let c = 0; c <= 10; c++) {
        console.log(`${c} x ${numero} = ${c * numero}`);

    }

}


tablaDeMultiplicar(9);
console.log("-----------------------");
tablaDeMultiplicar(80);
console.log("-----------------------");
tablaDeMultiplicar(100);

//===========================
/**
 * imprimir la tabla de multiplicar de todos los elementos
del arreglo llamado "arreglo"

=============================
 */

let arreglo = [5, 8, 4, 7, 2, 3];

for (let c = 0; c < arreglo.length; c++) {
    console.log(`tabla del ${arreglo [c]}`);
    tablaDeMultiplicar(arreglo [c]);
}
