/**
=======================================
Atrapando los ID's de los input
*/
const formulario = document.getElementById("formulario");
const link = document.getElementById("link");
const inputNombre = document.getElementById("inputNombre");
const inputApellido = document.getElementById("inputApellido");
//normalmente todos los elementos que capturan a un ID se pone en la parte superior
//RETO:
const tbody = document.getElementById("tbody");

//se coloca un HELPER para ayudar al usuario y este esta siendo llamado por su ID.
const helper = document.getElementById("helper");

//arreglo de usuarios
let usuarios = [];

//para limpiar los errores que tenga la aplicación
const limpiarErrores = () => {
     //se quitara el estilo al formulario rojo (borde__rojo)
     formulario.classList.remove("borde__rojo");
     //Ocultaremos el small - HELPER
     helper.setAttribute("hidden", true);
     //OJO: si el HELPER, ya estaba oculto, que lo oculte nuevamente
     //Esto no generará ningún error en el sistema

};

//para generar un error, cuando los campos no esten llenos ene vez del ALERT.
const generarError = () => {
  //Va a hacer mostrar el texto de error, con el removeAttribute
  //elemento.removeAttribute("atributo"); elimina un atributo de un elemento
  helper.removeAttribute("hidden");
  //Le va a colocar el borde rojo al formulario
  formulario.classList.add("borde__rojo");
};

//para eliminar el usuario se envuelve en una constante o funcion
const eliminarUsuario = (posicion) => {
  console.log("Eliminando " + posicion);
  //se crea una funcion para eliminar forEach, map, for, filter, etc
  usuarios = usuarios.filter((usu, i) => {
    if (i !== posicion) {
      return usu;
    }
  });

  redibujarTbody();
};

//funcion del reto
const redibujarTbody = () => {
  //1.- Limpiar el tbody (borrar todo el innerHTML de tbody) tbody.innerHTML = "";
  tbody.innerHTML = "";
  //2.- crear una variable string vacia
  //let contenido = "";

  //Se esta creando una nueva variable con un DocumentFragment() que es como una etiqueta
  //nueva que va a encerrar todo los datos del tbody  "<> </>"
  let tbodyFalso = new DocumentFragment();

  //3.- recorrer el arreglo de usuarios (ejem: forEach)
  usuarios.forEach((usu, i) => {
    //4.- En el forEach ir agregando al string vacio la estructura de la fila por cada usuario (concatenar STRINGS)
    // contenido = contenido + `<tr>
    //                                         <td>${i + 1}</td>
    //                                         <td>${usu.nombre}</td>
    //                                         <td>${usu.apellido}</td>
    //                                         <td><button>Eliminar</button></td>
    //                                    </tr>`;

    //======se hara una forma mas estabale para controlar el boton de eliminar====
    let tr = document.createElement("tr");

    let tdNro = document.createElement("td");
    tdNro.innerText = i + 1;

    let tdNombre = document.createElement("td");
    tdNombre.innerText = usu.nombre;

    let tdApellido = document.createElement("td");
    tdApellido.innerText = usu.apellido;

    let tdAcciones = document.createElement("td");
    let btnEliminar = document.createElement("button");
    btnEliminar.innerText = "Eliminar";
    //El evento onclick hara que se elimine el nombre con el boton "Eliminar"
    btnEliminar.onclick = () => {
      console.log("Se hizo click en el boton eliminar");
      console.log(`Eliminando en registro de : ${usu.nombre}`);

      //eliminando el usuario en la posicion del i + 1;
      eliminarUsuario(i);
    };

    tdAcciones.appendChild(btnEliminar);

    tr.appendChild(tdNro);
    tr.appendChild(tdNombre);
    tr.appendChild(tdApellido);
    tr.appendChild(tdAcciones);

    // se crea el tbodyFalso por un motiivo de rapidez o eficiciencia
    tbodyFalso.appendChild(tr);
  });

  tbody.appendChild(tbodyFalso);

  //5.- luego del forEach o for, settear el innerHTML del tbody con el string creado
  //tbody.innerHTML = contenido;
  //Reto: darle estilos a las tablas.

  //Colocar el cursor nuevamente en el campo del nombre para que el usuario
  //este listo para ingresar un siguiente registro
  //la funcion FOCUS, lo que hace es pedirle al navegador que situe al navegador donde esta el nombre.
  inputNombre.focus();
};

/**
Formulario.onsubmit = evento que se desencadena cuando queremos procesar o enviar desde un formulario

*/

formulario.addEventListener("submit", (evento) => {
  /**
     xq se actualiza la pagina con el boton SUBMIT
     xq es el comportamiento por defecto
     Como detener el comportamiento por defecto de un evento
     evento.preventDefault(); se detiene cualquier accion por defecto que tiene un elemento
     */
  evento.preventDefault();
  console.log(`procesando el formulario...`);

  //Se tiene que validar los datos (que este lleno los campos)antes de enviar el objeto usuario
  //funcion trim(este permite borrar o eliminar los espacios en blanco de los costados)
  if (inputNombre.value.trim() === "" || inputApellido.value.trim() === "") {
    //indicar un error de ingreso de datos
    //alert("Ups! Error en el ingreso de datos");
    //en vez del alert se va a generar un error, pero con una funcion
    generarError();
    return;
  }

  //en todos los elementos de un formulario el campo VALUE, es para ver que valor a ingresado el usuario, radio-button, select, etc.. se esta creando una variable dentro de un scope, que se va a ejecutar  varias veces, y hace que pueda ser utilizada por diferentes objetos
  //console.log(inputNombre.value);
  let objetoUsuario = {
    nombre: inputNombre.value,
    apellido: inputApellido.value,
  };

  usuarios.push(objetoUsuario);
  //para limpiar los campos del formulario, de nombre y apellido
  inputNombre.value = "";
  inputApellido.value = "";

  //limpiando errores despues del ponerle warnings al fomulario texto y border rojo con el helper
  //OJO: si no tenian ERRORES anteriormente, no importara, igual esto no afecta loss estilos de la aplicacion.
  limpiarErrores();

  console.log(usuarios);
  //console.log(objetoUsuario);
  /**
RETO: llamar a una funcion que redibuje el tbody, cada vez que nuestro arreglo de usuarios sea alterado, (cambia de elementos)
*/
  redibujarTbody();
});

link.onclick = (evento) => {
  evento.preventDefault();
  console.log("Dieron click al hipervinculo");
};
//==========================
