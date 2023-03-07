import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { postMascota, putMascota } from "./services/mascotaService";

const formularioVacio = {
  mascota_nombre: "",
  mascota_raza: 0,
  mascota_tipo: 0,
  mascota_edad: 0,
  mascota_colores: "",
  mascota_activo: false,
};

const MascotasForm = ({ traerMascotas, mascotaEditar }) => {
  const [formulario, setFormulario] = useState(formularioVacio);
  const [modo, setModo] = useState("crear");
  //el handleChange maneja un evento
  const handleChange = (e) => {
    let valor = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormulario({
      ...formulario,
      [e.target.name]: valor,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modo === "crear") {
      Swal.fire({
        title: "¿Registrar mascota?",
        text: "Se guardará en la base de datos",
        icon: "question",
        showCancelButton: true,
      }).then(({ isConfirmed }) => {
        if (isConfirmed) {
          //crear el registro de la mascota
          postMascota(formulario).then((data) => {
            console.log(data);
            if (data.mascota_id) {
              traerMascotas();
              setFormulario(formularioVacio);
              Swal.fire({
                title: "Registrado!",
                text: "Mascota registrada correctamente",
                icon: "success",
                timer: 1500,
              });
            }
          });
        }
      });
    } else {
      //asumimmos que estamos en el modo editar
      Swal.fire({
        title: "¿Editar?",
        text: "¿Seguro que deseas editar el registro de mascota?",
        icon: "question",
        showCancelButton: true,
      }).then(({ isConfirmed }) => {
        if (isConfirmed) {
          putMascota({ ...formulario }).then((respuesta) => {
            if (respuesta.status === 200) {
              setFormulario(formularioVacio);
              setModo("crear");
              traerMascotas();

              Swal.fire({
                position: "top-end",
                title: "Registro actualizado",
                icon: "success",
                timer: 1000,
                showConfirmButton: false,
              });
            }
          });
        }
      });
    }
  };
  //----Ejemplo de useEffect--------------------
  // useEffect(() => {
  //   console.log("UseEffect cuando cambia el vacio");
  // }, []);
  // useEffect(() => {
  //   console.log("UseEffect cuando cambia la Formulario");
  // }, [formulario]);
  //------Fin de ejemplo-----------------------------------------

  useEffect(() => {
    console.log("UseEffect cuando cambia la mascotaEditar");
    if (mascotaEditar !== null) {
      setFormulario(mascotaEditar);
      setModo("Editar");
    }
  }, [mascotaEditar]);

  return (
    <div className="row">
      <div className="col-12">
        <div className="card shadow">
          <div className="card-body">
            <form action="" className="row" onSubmit={handleSubmit}>
              <div className="form-group col-md-6">
                <label htmlFor="">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese nombre"
                  name="mascota_nombre"
                  onChange={handleChange}
                  value={formulario.mascota_nombre}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">Raza</label>
                <select
                  className="form-control"
                  name="mascota_raza"
                  onChange={handleChange}
                  value={formulario.mascota_raza}>
                  <option value="0">Seleccione</option>
                  <option value="1">Bull terrier</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">Colores</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese colores"
                  name="mascota_colores"
                  onChange={handleChange}
                  value={formulario.mascota_colores}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">Edad</label>
                <input
                  type="number"
                  className="form-control"
                  name="mascota_edad"
                  onChange={handleChange}
                  value={formulario.mascota_edad}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">Tipo</label>
                <select
                  className="form-control"
                  name="mascota_tipo"
                  onChange={handleChange}
                  value={formulario.mascota_tipo}>
                  <option value="0">Seleccione</option>
                  <option value="1">Perro</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="">¿Registro activo?</label>
                <div className="input-group mb-3">
                  <div className="input-group-text">
                    <input
                      className="form-check-input mt-0"
                      type="checkbox"
                      id="checkActivo"
                      //checket = es el campo analogo al value y solo acepta booleanos (true or false)
                      checked={formulario.mascota_activo}
                      name="mascota_activo"
                      onChange={handleChange}
                      aria-label="Checkbox for following text input"
                    />
                  </div>
                  <label htmlFor="checkActivo" className="form-control">
                    Activo
                  </label>
                </div>
              </div>
              <div className="form-group col-md-6">
                <button className="btn btn-block btn-primary" type="submit">
                  {modo === "crear" ? "Crear mascota" : "Guardar cambios"}
                </button>
              </div>
              <div className="form-group col-md-6">
                <button className="btn btn-block btn-danger" type="button">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MascotasForm;
