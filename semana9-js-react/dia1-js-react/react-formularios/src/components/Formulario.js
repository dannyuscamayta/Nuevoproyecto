import React, { useState } from "react";
import Swal from "sweetalert2";

const Formulario = () => {
  const [formulario, setFormulario] = useState({ nombre: "", apellido: "", fecha: "2023-02-02"});
  //const [apellido, setApellido] = useState("");

  const handleChange = (e) => {
    let campo = e.target.name;
    setFormulario({
      ...formulario,
      [campo]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("Enviando formulario...");
    console.log(formulario);
    Swal.fire({
        title: "Creado!",
        text: "Usuario creado exitosamente!",
        icon: "success",
        timer: 2000
    });
    //console.log(nombre);
    //console.log(apellido);
    // let objPersona = {
    //     nombre: nombre,
    //     apellido: apellido
    // };
    // console.log(objPersona);
    //limpiar elk formulario
    setFormulario({
        nombre: "",
        apellido: "",
        fecha: "2023-02-02"
    });
  };
  return (
    <div className="row">
      <div className="col-12">
        <div className="card shadow">
          <div className="card-body">
            <form onSubmit={submit}>
              <div className="form-group">
                <label htmlFor="">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese su nombre"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Apellido:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese su apellido"
                  name="apellido"
                  value={formulario.apellido}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Fecha de nacimiento:</label>
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  value={formulario.fecha}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-dark" type="submit">
                  Crear usuario
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;

/**
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");

    const submit = (e) => {
        e.preventDefault();
        console.log("Enviando formulario...");
        console.log(nombre);
        console.log(apellido);
    }
        return (
    <div className='row'>
        <div className='col-12'>
            <div className='card-shadow'>
                <div className='card-body'>
                    <form onSubmit={submit}>
                        <div className='form-group'>
                            <label htmlFor=''>Nombre:</label>
                            <input type='text' 
                            className='form-control'
                            placeholder='Ingrese su nombre'
                            value={nombre}
                            onChange={(e) => {
                                setNombre(e.target.value);
                            }}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor=''>Apellido:</label>
                            <input type='text' 
                            className='form-control'
                            placeholder='Ingrese su apellido'
                            value={apellido}
                            onChange={(e) => {
                                setApellido(e.target.value)
                            }}
                            />
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-dark' type='submit'>Crear usuario</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Formulario
*/
