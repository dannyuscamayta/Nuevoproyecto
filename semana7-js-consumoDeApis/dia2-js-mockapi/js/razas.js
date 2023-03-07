import { URL_BACKEND } from "./variables.js";
import { postRaza, putRaza, deleteRazaById } from "./services/raza-services.js";

//capturando la tabla del tbody
const tBodyRazas = document.getElementById("tbody-razas");
const formRaza = document.getElementById("formRaza");
const inputNombre = document.getElementById("inputNombre");
const btnAccion = document.getElementById("btnAccion");

//para crear y editar cualquiera de las razas con nombre e Id
let modo = "crear";

//para dibujar los arrays de peticion que se encuentren en la BD
let razas = [];

//creando una funcion global de las razas, y guardar globalmente un objeto raza que se desee editar
let razaGlobal = {};

//para hacer la peticion
const getRazas = () => {
  fetch(`${URL_BACKEND}/raza`).then((peticion) => {
    peticion.json().then((data) => {
      console.log(data);
      razas = [...data];
      dibujarTabla();
    });
  });
};
//siempre se tiene que llamar a la funcion
getRazas();

//colocancdo el evento formRaza
formRaza.onsubmit = (e) => {
  e.preventDefault();
  //validando el formulario
  if (inputNombre.value.trim() === "") {
    Swal.fire({
      title: "Error!",
      text: "Todos los campos deben estar llenos",
      icon: "error",
    });
    return;
  }

  //agragando en que modo esta para editar
  if (modo === "crear") {
    //sweet alert
    Swal.fire({
      title: "Crear?",
      text: "¿Seguro que deseas crear el registro?",
      icon: "info",
      showCancelButton: true,
    }).then((rpta) => {
      //console.log(rpta);
      //Si crear de todos modos
      if (rpta.isConfirmed) {
        //To Do; validar el formulario
        let objRaza = {
          raza_nombre: inputNombre.value.trim(),
        };
        postRaza(objRaza).then((peticion) => {
          peticion.json().then((data) => {
            //Validando que la data se haya creado exitosamente
            if (data.raza_id) {
              //Lanzar un sweet alert de exito
              Swal.fire({
                title: "Hecho!",
                text: "Registro creado exitosamente",
                icon: "succes",
                timer: 1500,
              });
              inputNombre.value = "";
              getRazas();
            }
            //console.log(data);
          });
        });
      }
    });
  } else {
    //entramos al modo editar
    let objRaza = {
      raza_id: razaGlobal.raza_id,
      raza_nombre: inputNombre.value.trim(),
    };
    //Entramos al modo editar
    putRaza(objRaza).then((peticion) => {
      peticion.json().then((data) => {
        // console.log(data);
        getRazas();
        modoCrear();
      });
    });
  }
};

//creando el modo crear
const modoCrear = () => {
  razaGlobal = {};
  modo = "crear";
  btnAccion.innerText = "Crear raza";
  inputNombre.value = "";
};

//para editar la raza es una funcion (los 3 puntos es para copiar todos los elementos que tiene un objeto)
const modoEditar = (raza) => {
  //console.log(raza);
  razaGlobal = { ...raza };
  modo = "editar";
  btnAccion.innerText = "Guardar cambios";
  inputNombre.value = razaGlobal.raza_nombre;
};

//Eliminando los campos de la tabla
const eliminar = (raza_id) => {
  //para poner una alerta sweet alert
  Swal.fire({
    title: "¿Eliminar?",
    text: "¿Seguro que deseas elimianr el registro?",
    icon: "error",
    showCancelButton: true,
  }).then((rpta) => {
    if (rpta.isConfirmed) {
      deleteRazaById(raza_id).then((peticion) => {
        peticion.json().then((data) => {
          if(data.raza_id) {
            Swal.fire({
              title: "Exito!!",
              text: "Registro eliminado correctamente",
              icon: "success",
              timer: 1500,
            });
            getRazas();
          }
          //console.log(data);
        });
      });
    }
  });
};

//creando la funcion de dibujar tabla
const dibujarTabla = () => {
  //para que se borre la data de la tabla para que no se aumente
  tBodyRazas.innerHTML = "";

  razas.forEach((raza) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${raza.raza_id}</td>
                            <td>${raza.raza_nombre}</td>`;
    let tdBotones = document.createElement("td");
    //creando el boton editar en el html
    let btnEditar = document.createElement("button");
    btnEditar.classList.add("btn", "btn-warning", "me-2");
    btnEditar.innerText = "Editar";
    btnEditar.onclick = () => {
      modoEditar(raza);
    };
    //creando un boton en el html
    let btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btn", "btn-danger");
    btnEliminar.innerText = "Eliminar";
    //Editando el btn eliminar
    btnEliminar.onclick = () => {
      eliminar(raza.raza_id);
    };

    //creando los botones para que aparezcan en el html
    tdBotones.appendChild(btnEditar);
    tdBotones.appendChild(btnEliminar);
    //agregando al tr
    tr.appendChild(tdBotones);
    tBodyRazas.appendChild(tr);
  });
};
