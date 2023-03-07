/**
FUNCIONES DENTRO DE OTRA FUNCION


area de un circulo = pi x el radio al cuadrado,


"es diferente a la palabra reservada math.pi"

*/

//debugger

const areaCirculo = (r) => {

    const PI = 3.1416;
    const cuadrado = (n) => {

        return n * n;
    }

    return PI * cuadrado(r);
}

console.log(areaCirculo(2));