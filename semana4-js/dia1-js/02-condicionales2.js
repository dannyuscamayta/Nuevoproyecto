/**
COMPARADORES ARITMETICOS

> mayor
< menor
<= menor o igual que
>= mayor o igual que
=== igual   (js se pone estricto, y este tiene que ser igual en valor y tipo de dato)
!== diferente

HAY COMPARADORES DE USO ESTRICTO
let a= "2";
let = 2;

if (a = b) {
    // este tipo de dato js, dirá que es los datos son iguales, por lo tanto dirá que es verdad o TRUE
}
// en cambio si se usa los 3 signos de igualdad === 
// js dirá que es falso o FALSE, xq se pone mas estricto y el valor
// tiene que ser igual en valor y tipo de dato


*/

/**
CALCULAR EL INDICE DE MASA CORPORAL
é indicar  simuna persona se encuentra con sobrepeso 

15 o menos, delgadez
15 a 25 peso ideal
25 a mas sobrepeso

FORMULA DEL INDICE DE MASA CORPORAL SERÁ:
IMC = PESO (KG)/ ALTURA  al cuadrado (M)


*/

let peso = +prompt("Ingrese su peso en kgs");
let altura = +prompt("Ingrese su talla en cm");

/**
 * Const : constantes solo empiezan con un solo valor y estas no cambian en su valor
 * const edad = 25;
 * edad = edad +1;   en este caso dara un error
 * su valor nunca cambiara, a menos que sea un objeto []
 */
const imc = peso / (altura * altura);

// console.log(imc);
// // console.log(imc);
if (imc <= 15) {
  console.log("El paciente presenta sintomas de delgadez 😢");
} else {
  if (imc > 25) {
    console.log("El paciente presenta sobrepeso  😪");
  } else {
    console.log("El paciente tiene un peso ideal 😁");
  }
}

//===================================
// let weight = +prompt("Ingrese su peso el kg.");
// let height = +prompt("Ingrese su talla el mts.");

// //function bmiCalculator (weight, height) {
//   let bmiCalculator = weight / (height * height);
//   //return interpretation;
// console.log(bmiCalculator);
// //}
//   if (bmiCalculator < 18.5) {
//       console.log(`Your BMI is ${bmiCalculator}, so you are underwight`);
//   }else if (bmiCalculator > 24.9){
//       console.log(`your BMI is ${bmiCalculator}, so you are overweight`);
//   }else {
//       console.log(`Your BMI is ${bmiCalculator}, so you have a normal weight`);
//   }




