/**
** EJERCICIOS CON OBJETOS
Algoritmo para guardar "n" personas y registrar cada una con un nombre, apellido, edad,

guardarlo en un arreglo [ ] de objetos {} e imprimirlo en consola


*/
//registrando las personas
const registrarPersonas = () => {
  //creando el numero de personas,
  const n = 3;

  //arreglo de personas
  const personas = [];

  // se esta iterando;
  for (let c = 0; c < n; c++) {
    //guardando el nombre de las personas que ingresan mediante el prompt
    const nombre = prompt(`Ingrese el nombre de la persona ${c + 1}`);
    const apellido = prompt(`Ingrese el apellido de la persona ${c + 1}`);
    const edad = +prompt(`Ingrese la edad de la persona ${c + 1}`);
    // creando un objeto con la finalidad de guardar los valores
    const objPersona = {
      name: nombre,
      lastName: apellido,
      age: edad,
    };

    personas.push(objPersona);
  }

console.log(personas);
};

//El resultado tiene la forma de un JSON;
registrarPersonas();


