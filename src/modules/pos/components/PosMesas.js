import React from "react";
import PosMesaSingular from "./PosMesaSingular";

function PosMesas() {
  return (
    <div className="mesas">
      <ul className="mesas__lista">
        <PosMesaSingular />
        <PosMesaSingular />
        <PosMesaSingular />
        <PosMesaSingular />
        <PosMesaSingular />
        <PosMesaSingular />
      </ul>
      <div className="mesas__info"></div>
    </div>
  );
}

export default PosMesas;
