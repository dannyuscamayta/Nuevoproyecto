import axios from "axios";
import { URL_BACKEND } from "../environments/environments";

export const getMascotas = async () => {
  const resultado = await axios.get(`${URL_BACKEND}/mascota`);
  return resultado.data;
};

export const postMascota = async (objMascota) => {
  // const peticion = await fetch(`$URL_BACKEND/mascota`, {
  //     method: "POST",
  //     body: JSON.stringify(objMascota),
  //     headers: {
  //         "Content-type": "application/json"
  //     }
  // });
  // const data = await peticion.json();
  //Es la misma peticion pero sin usar axios

  const resultado = await axios.post(`${URL_BACKEND}/mascota`, JSON.stringify(objMascota), {
    headers: {
      "Content-type": "application/json",
    },
  });
  return resultado.data;
};

export const deleteMascotasById = async (id) => {
  // const respuesta = axios.delete(`${URL_BACKEND}/mascota/${id}`);
  // return (await respuesta).data;

  //esto seria el method: DELETE con fetch
  const peticion = await fetch(`${URL_BACKEND}/mascota/${id}`, {method: "DELETE"});
  const json = await peticion.json();
  return json
};

export const putMascota = async (objMascota) => {
  // console.log(objMascota);
  const respuesta = await axios.put(`${URL_BACKEND}/mascota/${objMascota.mascota_id}`,
  JSON.stringify(objMascota), 
  {
    headers: {
      "Content-Type": "Application/json",
    },
  });
  return respuesta;
};
