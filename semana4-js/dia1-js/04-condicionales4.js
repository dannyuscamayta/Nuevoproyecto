/**
OPERADORES LOGICOS : 
&& : Este es and o y 
|| : or o
! not o se le conoce como negacion

cuando se usa operadores logicos, las preguntan cambian un poco
su forma:
cuando se coloca una pregunta P
y se coloca una segunda pregunta Q 
y se usa el aspersand &&  que es "y" or "and"

esto significa el "y "

P &&  Q  (se lee que si las dos preg. son verdaderas => el resultado sera verdadero)
v       v = v
v       f = f
f       v = f
f       f = f

// en cambio: OR ó O
P || Q (se lee que si solo una de las preguntas es verdadero, su respuesta sera verdadero, pero si en cambio las dos son falsas dara falsa)
v       v  = v
v       f  = v
f       v  = v
f       f  = f

*/

/**
El ejecicio del mayor de 3 numeros con operadores logicos
*/

const nro1 = 24;
const nro2 = 40;
const nro3 = 35;

if (nro1 > nro2  && nro1 > nro3) {
    // se lee: si el numero 1 es mayor que el numero 2 y tambien a su vez es mayor que el numero 3
    console.log(`el mayor es el ${nro1}`);
} else {
    if (nro2 > nro1 && nro2 > nro3) {
        console.log(`El mayor es el ${nro2}`);
    } else {
        console.log(`El mayor es el ${nro3}`);
    }
}
