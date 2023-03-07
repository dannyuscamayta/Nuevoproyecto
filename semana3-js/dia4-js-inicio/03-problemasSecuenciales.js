/**
Ejemplo 2.2
Un estudiante realiza cuatro exámenes durante el semestre, los cuales tienen
la misma ponderación. Realice el pseudocódigo y el diagrama de flujo
que representen el algoritmo correspondiente para obtener el promedio
de las calificaciones obtenidas.
Las variables que se van a utilizar en la solución de este problema se
muestran en la tabla 2.3.
Nombre de la variable 
Descripción Tipo; C1, C2, C3, C4 Calificaciones obtenidas Real
S =  Suma de calificaciones Real
P ? Promedio calculado Real
*/

let c1 = +prompt("Ingrese la primera nota del alumno!");
let c2 = +prompt("Ingrese la primera nota del alumno!");
let c3 = +prompt("Ingrese la primera nota del alumno!");
let c4 = +prompt("Ingrese la primera nota del alumno!");

let suma = 0;
let promedio = 0;

//se suma las notas y se divide entre 4 para hallar el promerdio
suma = c1 + c2 + c3 + c4;
promedio = suma / 4;
// el resultado que se muestra en la consola es:
// console.log(`Sr alumno su promedio de notas es: ${promedio}`);

// ó el resultado que se muestra en la pantalla sin usar el console.log es ALERT
alert(`Sr alumno su promedio de notas es: ${promedio}`);


