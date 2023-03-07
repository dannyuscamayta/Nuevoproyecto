import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../assets/huella.png";

const Header = () => {
  /**
  * ? LINK : 
  * este componente que sirve para redireccionarnos solo a una ruta especifica, y esta es igual a la etiqueta <a></a> sin embargo, la logica de react, usa LINK
  * ? NAVLINK: 
  * Componente con las mismas facultades que el compinente link, sin embargo tiene la propiedad dentro de className, que sirve para colocar una clase en el link que este activo, dependiendo de la ruta en la que nos encontremos.
  * ! className={({isActive}) => (isActive ? "active" : "")}
  * en esta clase si se quiere resaltar se crea una hoja de CSS (estilos) y dentro usar diferentes configuraciones xq ahora ya no se usa activeClassName
  */
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <img src={logo} alt="" height={50}/>
      <NavLink className="navbar-brand ms-4" to="/">
        MascotaApp
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to={"/"} aria-current="page">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/mascotas"}>
              Mascotas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/razas"}>
              Razas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/tipos"}>
              Tipos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/citas"}>
              Citas
            </NavLink>
          </li>
        </ul>
        <form className="d-flex my-2 my-lg-0">
          <input
            className="form-control me-sm-2"
            type="text"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
