/**
se le va a agregar una lista en el nav bar con el js
capturando el elemento por el ID

*/

const navLista = document.getElementById("navLista");
const tbody = document.getElementById("tbody");
const links = ["Nosotros", "Proyectos", "Contacto", "Anuncios"];

//========================
//comienzo de los datos de los usuarios
//========================
const usuarios = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg",
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg",
  },
];
//========================
// Fin de los datos de los usuarios
//========================

// const unString = "<li><a href='#'>Nosotros</a></li>" +
//                          "<li><a href='#'>Contacto</a></li>";

// navLista.innerHTML = unString;
// las lineas comentadas son solo una concatenacion que apraceran en el DOM gracias a innerHTML

/**
 * Se va a encerrar todo el forEach dentro de una funcion, solo para que este codigo sea mas ordenado
Funcion que agrega mediante un string todos los links de la lista

 */

const llenarLinks = () => {
  let stringLinks = "";
  // con un itetrador se va a recorrer los links y se tiene que llenar el DOM con los Li

  links.forEach((link) => {
    // console.log(link);
    stringLinks = stringLinks + `<li><a href="#">${link}</a></li>`;
  });

  navLista.innerHTML = stringLinks;
};

llenarLinks();

/**=========================
se va a crear una funcion para llenar los usuarios
===========================
*/

const llenarUsuarios = () => {
     
     // 1.- crear un string vacio
     let filas = "";
     // 2.- Recorrer el arreglo de usuarios con un forEach ó for
     usuarios.forEach((usu) =>{
          //console.log(usu);
          // 3.- En cada iteracion sumar al STRING del paso 1
          //      un tr con 5td's con la data del objeto usuario
          filas = filas + `<tr>
                                   <td class="borde">${usu.id}</td>
                                   <td class="borde">${usu.email}</td>
                                   <td class="borde">${usu.first_name}</td>
                                   <td class="borde">${usu.last_name}</td>
                                   <td class="borde">
                                        <img src="${usu.avatar}" alt="foto del usuario"/>
                                   </td>
                                   <td class="borde">
                                        <button>Eliminar</button>
                                   </td>
                              </tr>`;
     });
     // 4.- luego de todas la iteraciones, hacer un innerHTML con el string   creado
     tbody.innerHTML = filas;

};

llenarUsuarios();