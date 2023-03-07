/**
**Local storage:
*?es una memoria que tiene nuestro navegador a nivel LOCAL
esto quiere decir que si mi computadora guardo archivos del internet, esta solo se vera en la maquina del usuario
** en el podemos guardar algunos datos del usuario que no sean relvantes, sencibles o criticos.
En el, podemos guardar por ejemplo:
**preferencias (color, tema, ultimo texto copiado, etc.)
**El local storage es diferente para cada dominio en el mismo equipo.

*?ejemplo: 
para www.google.com (Nuestro ordenador tiene un local storage),
para www.facebook.com (Nuestro ordenador tiene un local storage),
para www.youtube.com (Nuestro ordenador tiene un local storage)

las cookies, se guardan en el lado del servidor. Es muy diferente al local storage.

*/

const formulario = document.getElementById("formulario");
const inputColor = document.getElementById("inputColor");
//se atrapa el body con el querySelector
const body = document.querySelector("body");

//para prevenir que se actualice la paginas
formulario.onsubmit = (e) => {
  e.preventDefault();
  console.log(inputColor.value);

  //se va guardar el color favorito en el local storage
  //window.localstorage.setItem("clave", "valor")
  //"valor" Siempre debe ser un STRING

  const colorFavorito = inputColor.value;
  window.localStorage.setItem("color", colorFavorito);
  body.style.backgroundColor = colorFavorito;
  //
};

//Para verificar o ver los colores guardados del storage o preferncias del usario
const verificarStorage = () => {
  // Funcion que obtendra el color favorito del Local storage
  //y lo colocara como un background del body, pero en caso no exista
  // los datos en el local storage, no sucedera ningun cambio
  //window.localStorage.getItem("clave") = retorna el valor en STRING de la clave proporcionada.

  const colorFavorito = window.localStorage.getItem("color");
     //si el color favorito existe!
     if (colorFavorito !== null) {
          body.style.backgroundColor = colorFavorito;
     }
};

verificarStorage();
