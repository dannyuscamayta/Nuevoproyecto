import React from "react";
import { MDBDataTable } from "mdbreact";
import { deleteMascotasById, putMascota } from "./services/mascotaService";
import Swal from "sweetalert2";
import Toggle from "react-toggle";
import "react-toggle/style.css";

const MascotasTabla = ({ mascotas, traerMascotas, setMascotaEditar, setMascotas }) => {
  const eliminarMascotaPorId = (id) => {
    Swal.fire({
      title: "¿Eliminar?",
      icon: "error",
      text: "Los cambios son irreversibles",
      showCancelButton: true,
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        deleteMascotasById(id).then((data) => {
          //si la data tiene un atributo mascota_id, si sera eliminado
          if (data.mascota_id) {
            setMascotas([]);
            traerMascotas();
            Swal.fire({
              title: "Eliminado!",
              text: "Registro eliminado satisfactoriamente",
              icon: "success",
              timer: 1500,
            });
          }
        });
      }
    });
  };

  const handleChangeToggle = (estado, objMascota) => {
    putMascota({
      ...objMascota,
      mascota_activo: estado,
    }).then((rpta) => {
      // console.log(rpta);
      //Actualizar el estado mascotas del componente mascotas.js con la mascota
      // que acaba de modificar su valor (campo: mascota_activo)

      if (rpta.status === 200) {
        setMascotas(
          mascotas.map((m) => {
            if (m.mascota_id === objMascota.mascota_id) {
              m.mascota_activo = estado;
            }
            return m;
          })
        );
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registro actualizado",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };

  const data = {
    columns: [
      {
        //texto del th
        //nombre del campo de objeto que debe coincidir en la row
        label: "Id",
        field: "mascota_id",
      },
      { label: "Nombre", field: "mascota_nombre" },
      { label: "Raza", field: "mascota_raza" },
      { label: "Colores", field: "mascota_colores" },
      { label: "Tipo", field: "mascota_tipo" },
      { label: "Edad", field: "mascota_edad" },
      { label: "Activo", field: "mascota_activo" },
      { label: "Acciones", field: "acciones" },
    ],
    rows: mascotas.map((m) => {
      return {
        ...m,
        mascota_activo: (
          <Toggle
            defaultChecked={m.mascota_activo}
            onChange={(e) => {
              handleChangeToggle(e.target.checked, { ...m });
            }}
          />
        ),
        acciones: (
          <>
            <button
              className="btn btn-secondary me-2"
              onClick={() => {
                setMascotaEditar({ ...m });
              }}>
              Editar
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                eliminarMascotaPorId(m.mascota_id);
              }}>
              Eliminar
            </button>
          </>
        ),
      };
    }),
  };

  return (
    <div className="row mt-4">
      <div className="col-12">
        <div className="card shadow">
          <div className="card-body">
            <MDBDataTable className="text-center" responsive striped bordered hover data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MascotasTabla;

//esto es de los data table normales sin bootstrap
/* <div className="table-responsive">
              <table className="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Colores</th>
                    <th>Raza</th>
                    <th>Tipo</th>
                    <th>Edad</th>
                    <th>Activo</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {mascotas.map((m) => (
                    <tr key={m.mascota_id}>
                      <td>{m.mascota_id}</td>
                      <td>{m.mascota_nombre}</td>
                      <td>{m.mascota_colores}</td>
                      <td>{m.mascota_raza}</td>
                      <td>{m.mascota_tipo}</td>
                      <td>{m.mascota_edad}</td>
                      <td>{m.mascota_activo.toString()}</td>
                      <td>
                        <button className="btn btn-secondary mr-2">Editar</button>
                        <button className="btn btn-danger">Eliminar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> */
