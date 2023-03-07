/**
 *Calcular el valor de 3 numeros (asumiendo que son diferentes todos)
 *y mostrarlo en una sola consola
 *los nuemros pueden ser ingresados por el usuario o declarados al inicio del programa
 */

const nro1 = 20;
const nro2 = 23;
const nro3 = 10;

if (nro1 > nro2) {
    // si, el nro1 es mayor que el nro2
    if (nro1 > nro3) {
        // Si, el nro1 tambien es mayor que el nro3
        console.log(`El numero mayor es ${nro1}`);
    } else {
        console.log(`El número mayor es ${nro3}`);
    }
} else {
    if (nro2 > nro3) {
        console.log(`El numero mayor es ${nro2}`);
    }else {
        console.log(`El numero mayor es ${nro3}`);
    }
}


