/**
LAS FUNCIONES : es un conjunto de lineas de codigo, que se ejecutaran
cuando sean invocados,
NO ANTES, TAMPOCO DESPUES.



*/
//Imprimiremos una tabla de multiplicar del 5 
//el ciclo for estara encapsuldo en un funcion

/**
 * partes de una funcion: 
palab reservada: FUNCTION
nombre dela funcion: tablaDel5
parametros en los parentesis () parametros de entrada
ambito o scope de la funcion { FOR ..........}

UNA FUNCION NO SE EJECUTA HASTA QUE A ESTA SE LA INVOQUE
O SE LA LLAME, 
COLOCANDO EL NOMBRE DE LA FUNCTION FUERA DEL AMBITO
tablaDel5();
nombre, parametros de envio ()
 */

function tablaDel5 (){

    for (let c = 0; c <= 10; c++) {
        console.log(`${c} x 5 = ${c * 5}`);
    }

}

tablaDel5();


/**
la vemtaja de una funcion es que PUEDE SER INVOCADA "N" VECES
*/
console.log("------------------");
tablaDel5();
console.log("------------------");
tablaDel5();

/**
PROGRAMACION FUNCIONAL
otra ventaja de una funcion es que el codigo pueda
ser reutilizable
*/


