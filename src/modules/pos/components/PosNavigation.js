import React from "react";
import platoSvg from './../../../assets/img/plato_blanco.svg';

function PosNavigation() {
  return (
    <nav className="menu">
      <ul className="menu__lista">
        <li>
          <img src={platoSvg} alt="" />
          <span>Bebidas</span>
        </li>
        <li>
          <img src={platoSvg} alt="" />
          <span>Bebidas</span>
        </li>
        <li>
          <img src={platoSvg} alt="" />
          <span>Bebidas</span>
        </li>
        <li>
          <img src={platoSvg} alt="" />
          <span>Bebidas</span>
        </li>
      </ul>
    </nav>
  );
}

export default PosNavigation;
