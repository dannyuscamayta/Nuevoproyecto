/**
leer tantos numeros como el usuario decida darle
en cada vuelta o iteracion, al final mostrar la sumatoria

(el usuario debe ingresar "s" en caso de que quiera ingresar un 
siguiente numero y "n" cuando el usuario ya no desee 
ingresar nuevos numeros)

*/

let rpta = "s";

let sumatoria = 0;

while (rpta === "s") {
  // variable que se crea dentro del scope, y es un nro entero
  let nro = +prompt("Ingrese un número");
  // para acumular en cada iteracion es la siguiente linea
  sumatoria = sumatoria + nro;
  // respuesta al usuario despues de cada vuelta;
  rpta = prompt("¿Desea seguir ingresando mas numeros? Si (s), No (n)");
  //=====================================
  // para que solo pueda reconocer la respuesta SI o NO
  //mientras que la respuesta sea diferente de s o de n 
  //aparecera el mensaje de error
  while (rpta !== "s" && rpta !== "n") {
    rpta = prompt("Error! ingrese una respuesta valida, Si(s), No(n)");
  }
}

console.log(`Sumatoria total ${sumatoria}`);
