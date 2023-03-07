/**
EJERCICIOS DE FUNCIONES

crear un algoritmo donde exista una funcion, que reciba una arreglo
de edades, y retorne a todos los mayores de edad, en un nuevo arreglo


*/

const filtroMayores = (edades) => {
  let mayores = [];
  for (let c = 0; c < edades.length; c++) {
    if (edades[c] >= 18) {
      mayores.push(edades[c]);
    }
  }
  return mayores;
//   console.log(mayores);
};

let arreglo = [12, 19, 58, 17, 42, 10, 45];


//forma implicita
// filtroMayores(arreglo);

let losMayores = filtroMayores(arreglo);
console.log(losMayores);

//Una forma de hacer un arreglo del ejercicio anterior! pero mas corta
console.log([12, 19, 58, 17, 42, 10, 45, 89].filter((x) => x >= 18));
