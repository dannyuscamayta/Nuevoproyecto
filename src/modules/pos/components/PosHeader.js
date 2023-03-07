import React from 'react';
import logoSvg from "../../../assets/img/logo1.svg";
import searchSvg from "../../../assets/img/search.svg";

function PosHeader() {
  return (
    <div>
        <header className="header">
            <div className="header__logo">
            <img src={logoSvg} alt="" />
            </div>
            <div className="header__buscador">
            <img src={searchSvg} alt="" />
            <input
                type="text"
                className="header__input"
                placeholder="Busca un término"
            />
            </div>
            <div className="header__usuario">
            <img src="https://randomuser.me/api/portraits/men/90.jpg" alt="" />
            <span>Jorge Garnica</span>
            </div>
        </header>
    </div>
  )
}

export default PosHeader