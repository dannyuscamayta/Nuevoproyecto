/**
TABLA DE MULTIPLICAR

DADO UN ARREGLO DE NUMEROS ENTEROS,
IMPRIMIR POR CONSOLA, LA TABLA DE MULTIPLICAR DE CADA UNO DE LOS ELEMENTOS
INTERNOS HASTA EL NUMERO 10!



*/

const numeros = [2, 6, 5, 9, 17];

for (let c = 0; c < numeros.length; c++) {
    console.log("------------------------------");
    console.log(`tabla del ${numeros[c]}`);
    //lo que sigue es dar las vueltas x cada numero
    for (let i = 0; i <= 10; i++) {
        console.log(`${numeros[c]} x ${i} = ${numeros[c] * i}`);
    }

}



