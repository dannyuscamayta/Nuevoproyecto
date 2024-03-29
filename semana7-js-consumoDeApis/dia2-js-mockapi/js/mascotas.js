import { getRazas } from "./services/raza-services.js";

const selectRaza = document.getElementById("selectRaza");

const llenarRazas = () => {
  getRazas().then((peticion) => {
    peticion.json().then((razas) => {
      //console.log(data);
      if (razas.length > 0) {
        razas.forEach((raza) => {
          let option = document.createElement("option");
          option.innerText = raza.raza_nombre;
          option.value = raza.raza_id;
          selectRaza.appendChild(option);
        });
        $("#selectRaza").select2();
      }
    });
  });
};

llenarRazas();
