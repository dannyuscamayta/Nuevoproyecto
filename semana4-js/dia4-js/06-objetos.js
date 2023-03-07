/**  CLASE # 20 frontEnd
**OBJETOS: 
Los objetos se crean a travez de la ABSTRACCION de los elementos que queramos
 CREAR O REPRESENTAR

** Abstraer; significa llevar las caracteristicas de UN ENTORNO REAL 
 ** a un entorno VIRTUAL
let edad = 12;
let nombre = spike;
let raza = puddle;

*? solo que para los objetos no se tiene que crear tantas variables
solo una sola VARIABLE (puede ser cualquier tipo de dato) y se encierra en llaves {}


esto tendria que ser una programacion orientada a objetos
*/

let mascota = {
  // se coloca directamente las propiedades
  nombre: "Spike",
  raza: "Puddle",
  tipo: "Caninnus",
  edad: 1,
  pelado: false,
  vacuna: true,
  // Arreglo con uno ó mas objetos
  habilidades: [
    { nombre: "Se hace el muertito", nivel: "Experto" },
    { nombre: "Se para en dos patitas", nivel: "intermedio" },
  ],
  //puede tener un arreglo
  colores: ["blanco", "cafe", "cheqchi", "amarillo patito"],
  // puede tener un sub-objeto (clave: valor,)
  propietario: {
    nombre: "George Garnica",
    direccion: "Av. siempreViva",
    telefono: "+548956456",
  },
};

console.log(mascota);

//mostrando atributos:
console.log(`nombre: ${mascota.nombre}`);

//modificando atributos:
mascota.pelado = true;
console.log(mascota);

//CREANDO NUEVOS ATRIBUTOS DE LA MASCOTA
//normalmente no se hace esto, pero JS es permisivo
mascota.comida = "Ricocan";
console.log(mascota);

/**
Esta es un JSON => javascript object nnotation => 
en algunos casos los json van entre comillas "edad": 1,  pero automaticamente el prettier lo reindenta

*! un OBJETO puede tambien llevar un arreglo [] dentro del objeto
*/

//imprimiendo un sub-objeto
console.log(`Direccion: ${mascota.propietario.nombre}`);

//Imprimienso todos los colores de la mascota:
mascota.colores.forEach((elemento, i) => {
  console.log(`${i + 1} - ${elemento}`);
});

//imprimiendo los nombres de las habilidades
mascota.habilidades.forEach((elemento, i) => {
  console.log(elemento.nombre);
});

// el nombre del parametro puede cambiar como se muestra
mascota.habilidades.forEach((habilidad, i) => {
  console.log(habilidad.nivel);
});



