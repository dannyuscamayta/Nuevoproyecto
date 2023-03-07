/**
Creando una fucnion exportable individualmente
*/

export const persona = (nombre, edad, apellido, dni) => {
     return {
          nombre: nombre,
          edad: edad,
          apellido: apellido,
          dni: dni,
          //La palabra reservada "this" hace referencia al objeto en el que es USADO, y con ella 
          // se puede acceder a los diferentes atributos que tiene el objeto 
          asignarEdad: function(nuevaEdad) {
               this.edad = nuevaEdad;
          }
     }
};

/**
La funcion arguments sirve para obtener la posicion de los argumentos que se le pasa para imprimir
*/
// export function persona () {
//      console.log(arguments);
//      return {
//           nombre: nombre,
//           edad: edad,
//           apellido: apellido,
//           dni: dni,
//           La palabra reservada "this" hace referencia al objeto en el que es USADO, y con ella 
//            se puede acceder a los diferentes atributos que tiene el objeto 
//           asignarEdad: function(nuevaEdad) {
//                this.edad = nuevaEdad;
//           }
//      }
// };
