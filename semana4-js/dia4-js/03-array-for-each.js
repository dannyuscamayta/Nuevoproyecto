/**
FOR EACH: 
Es una funcion propia de los arreglos y sirve para RECORRER un arreglo 
sin necesidad de usar un ciclo FOR


*/

//arreglo de numeros, nombres, strings, numbers etc;

const nombres = ["Julinana", "Carlos", "Monica", "Abel", "Pepillo", "Lorito"];
/**
FOR EACH: recibe una funcion anonima, la cual EJECUTARA tantas veces
como el ELEMENTO tenga mi arreglo

puede recibir los siguientes parametros;
el orden de la valor, propiedad y arreglo
*todo ; (Elemento, posicion, arreglo) => {

}
*/
// eventualmente se puede recibir un tercer parametro (ARREGLO)

nombres.forEach((elemento, c, arreglo) => {
    // console.log("Ejecutando.......! 😁");
    console.log(`Elemento ${elemento}, C = ${c}`);
    console.log(arreglo);
});

nombres.forEach((elemento, c) => {
    // console.log("Ejecutando.......! 😁");
    console.log(`Elemento ${elemento}, C = ${c}`);
    
});


