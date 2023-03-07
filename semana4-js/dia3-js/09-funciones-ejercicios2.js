/**
EJERCICIO 2 
supongamos que tenemos una funcion llamada sumar y recibe 2 numeros "a y b"
y lo que hace esta funcion es retornar la suma de a y  b,  (de forma implicita)

implica que no debo crear una variable de para guardar el resultado de la suma, 
y retorno directamente el valor

*/
const sumar = (a, b) => {
  return a + b;
};

/*
dada la funcion sumar, con 4 numeros, e imprimir su resultado sin usar 
el signo de la suma (+)

*/

//se esta sumando de forma implicita
console.log(sumar(sumar(89, 5), sumar(12, 14)));
