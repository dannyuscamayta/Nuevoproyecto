import React from "react";

function Cargando() {
  return (
    <div className="alert alert-info text-center" role="alert">
      <h4 className="alert-heading">Cargando</h4>
      <button className="btn btn-primary" type="button" disabled>
        <span
          className="spinner-border spinner-border-sm text-info"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    </div>
  );
}

export default Cargando;
