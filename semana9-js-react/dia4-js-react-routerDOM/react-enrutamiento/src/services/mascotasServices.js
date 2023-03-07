import { URL_BACKEND } from "../environments/environments";
import { getRazaById } from "./razasServices";
import { getTipoById } from "./tiposServices";

export const getMascotas = async () => {
  const peticion = await fetch(`${URL_BACKEND}/mascota`);
  const data = await peticion.json();
  return data;
};

export const getMascotaById = async (mascota_id) => {
  const peticion = await fetch(`${URL_BACKEND}/mascota/${mascota_id}`);
  if (peticion.status === 200) {
    const data = await peticion.json();
    //significa que la mascota que estoy buscando, existe y ha llegado en el objeto data
    const objRaza = await getRazaById(data.mascota_raza);
    const objTipo = await getTipoById(data.mascota_tipo);

    const objMascota = {
      ...data,
      objRaza: objRaza,
      objTipo: objTipo,
    };
    return objMascota;
  } else {
    return null;
  }
};

// import { URL_BACKEND } from "../environments/environments"
// import { getRazaById } from "./razas";
// import { getTipoById } from "./tipos";

// export const getMascotas = async () => {
//   const peticion = await fetch(`${URL_BACKEND}/mascota`);
//   const data = await peticion.json();
//   return data;
// }

// export const getMascotaById = async (mascota_id) => {

//   const peticion = await fetch(`${URL_BACKEND}/mascota/${mascota_id}`);

//   if (peticion.status === 200) {
//     const data = await peticion.json();
//     const objRaza = await getRazaById(data.mascota_raza);
//     const objTipo = await getTipoById(data.mascota_tipo);
//     const objMascota = {
//       ...data,
//       objRaza: objRaza,
//       objTipo: objTipo
//     };
//     return objMascota;
//   } else {
//     return null;
//   }
// }
