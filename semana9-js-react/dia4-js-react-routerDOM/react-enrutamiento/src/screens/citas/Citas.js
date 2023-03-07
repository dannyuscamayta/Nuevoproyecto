import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./../citas/citas.css";
// react-big-calendar/lib/css/react-big-calendar.css (se tiene que importar la hoja de estilos de big calendar)
const localizer = momentLocalizer(moment);

const eventos = [
  {
    id: 1,
    title: "Cita con gato Felix",
    start: new Date(2023, 2, 3, 10, 0, 0),
    end: new Date(2023, 2, 3, 10, 30, 0),
    desc: "Vacuna - 3 control",
  },
  {
    id: 2,
    title: "Cita con perro Roco",
    start: new Date(2023, 2, 3, 11, 0, 0),
    end: new Date(2023, 2, 3, 11, 30, 0),
    desc: "Corte de uñas y corte de pelo ",
  },
];

function Citas() {
  // console.log(eventos);
  const eventoSeleccionado = (e) => {
    console.log(e);
  }

  const slotSeleccionado = (event) => {
    console.log(event);
  }

  return (
    <main className="container">
      <div className="row">
        <div className="col-12">
          <div className="card calendario">
            <div className="card-body">
              <Calendar
                selectable
                localizer={localizer}
                events={eventos}
                startAccessor="start"
                endAccessor="end"
                onSelectEvent={eventoSeleccionado}
                onSelectSlot={slotSeleccionado}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Citas;
