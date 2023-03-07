/**
**DATES => FECHAS : 
es la clase o tipo de dato que nos ayudara a trabajar con fechas



*/

let hoy = new Date();
console.log(hoy);

// tipo de dato: number
//let edad = 29;
//ambos son objetos
//tipo de dato: originalmente deberia ser asi! y lo de arriba se debe a la flexibilidad que tiene JS.
//let edad2 = new Number(29);

console.log("====================");
/**
*PROPIEDADES DE LA CLASE DATE
**fecha.getFullYear()
obtener el año de una fecha  / fecha.getFullYear();

*/
let anio = hoy.getFullYear();
console.log(anio);

console.log("====================");
/**
*PROPIEDADES DE LA CLASE DATE
**fecha.getMonth();
obtener el mes de una fecha  / ;
retorna el numnero de mes que corresponda en el calendario
donde 0 es ENERO
*/

let mes = hoy.getMonth();
console.log(`Hay que considerar que ENERO es 0, entonces hoy es: ${mes}`);

console.log("====================");
/**
*PROPIEDADES DE LA CLASE DATE
**fecha.getDate();
obtener el dia de una fecha  / ;
retorna el numero del dia que corresponda en el calendario

*/

let diaMes = hoy.getDate();
console.log(diaMes);

console.log("====================");
/**
*PROPIEDADES DE LA CLASE DATE
**fecha.getDay();
obtener el dia de una semana  / ;
retorna el numero de dia que corresponda en el calendario
donde 0 es DOMINGO
*/

let diaSemana = hoy.getDay();
console.log(
  `Domingo es considerado el dia 0, entonces hoy es el dia ${diaSemana}`
);

console.log("====================");
/**
* tambien se pueden obtener las horas, minutos, segundos, milisegundos
**hoy.getHours();
**hoy.getMinutes();
**hoy.getSeconds();
**hoy.getMilliseconds();

*/

let horas = hoy.getHours();
let minutos = hoy.getMinutes();
let segundos = hoy.getSeconds();
let milisegundos = hoy.getMilliseconds();

console.log(`Hora actual = ${horas}`);
console.log(`Minutos actuales = ${minutos}`);
console.log(`Segundos actuales = ${segundos}`);
console.log(`Milisegundos actuales = ${milisegundos}`);

/**
el mes se inicia en enero con el valor 0
los tipos de datos son new Date(año, mes, dia)

*/
console.log("====================");

let hallowen2022 = new Date(2022, 09, 31);
console.log(hallowen2022);

/**
Para restar el numero de dias que me queda para llegar a una fecha
*!ojo
este tipo de dato es en milisegundos el resultado
*/
console.log("====================");

let hallowenMenosHoy = hallowen2022 - hoy;
console.log(hallowenMenosHoy);

/**
para sacar el dato del resultado de los milisegundos y convertir a una fecha legible
se hara operaciones matematicas como divisiones
para este resultado de HallowenMenosHoy /(entre) 1000, se obtiene los segundos.
los sefundos tendria que dividir entre /60 y luego entre 60 para los minutos
y luego para las horas se divide entre 24

*/
console.log("====================");

let diasParaHallowen = (((hallowenMenosHoy / 1000) / 60) / 60) / 24;

// Propiedad toFixed(cantidad_de_decimales);
//retorna el numero redondeado a una cantidad de decimales
//pasado como un parametro.

console.log(`Nos quedan ${diasParaHallowen} dias para llegar a halloween`);
console.log(`Nos quedan ${diasParaHallowen.toFixed(2)} dias para llegar a halloween`);


console.log("====================");
/**
** Inicializar una fecha en formato UNIX ;

es el dt del objeto de formato milisegundos

*/

let fechaPronostico = new Date(1649786400 * 1000);
console.log(fechaPronostico);


