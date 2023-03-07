import React from "react";
import PosHeader from "../../components/PosHeader";
import PosNavigation from "../../components/PosNavigation";
import PosMesas from "../../components/PosMesas";
import PosCategorias from "../../components/PosCategorias";
import PosPlatos from "../../components/PosPlatos";
import PosComanda from "../../components/PosComanda";

function PosControlScreens() {
  return (
    <>
      <PosHeader />
      <main className="pos-container">
        <PosNavigation />
        <section className="tabla">
          <PosMesas />
          <div className="pedido">
            <div className="carta">
              <PosCategorias />
              <PosPlatos />
            </div>
            <div className="boleta">
              <h3>Pedido</h3>
              <PosComanda />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default PosControlScreens;
