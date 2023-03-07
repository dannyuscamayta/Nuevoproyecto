/**
Crear un algoritmo para verificar
si un año ingresado por el usuario es BISIESTO

TEORIA : para calcular un año bisiesto
los años bisiestos so los divisibles entre 4;
excepto si es divisible entre 100; entonces no es bisiesto

o que simplemente sea divisible entre 400; ya es bisiesto, no hay que analizar otro dato



*/

const anio = 1991
// si el año es divisible entre 4, osea su modulo es igual a 0
if ( anio % 4 === 0) {
    //ese mismo año su residio de dividirlo entre 100, NOP TIENE QUE SER CERO;
    if (anio % 100 !== 0) {
        console.log(`${anio} es bisiesto`);
    } else { //cuando el anio es divisible entre 4, pero tambien entre 100
        console.log(`${anio} no es bisiesto`);
    }
} else {
    if (anio % 400 === 0) {
        console.log(`${anio} es bisiesto`);
    } else {
        //en cualquier otro caso
        console.log(`${anio} no es bisiesto`);
    }
}

//===================================
// FORMA MAS RESUMIDA DEL MISMO EJERCICIO 
//===================================

if ((anio % 4 ===0 && anio % 100 !== 0) || anio % 400 === 0) {
    console.log(`${anio} es bisiesto`);
} else {
    console.log(`${anio} no es bisiesto`);
}





