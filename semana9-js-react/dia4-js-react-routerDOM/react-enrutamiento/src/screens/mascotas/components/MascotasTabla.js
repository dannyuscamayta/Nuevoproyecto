import React, { useEffect, useState } from "react";
import { getMascotas } from "../../../services/mascotasServices";
import { useNavigate } from "react-router-dom";

function MascotasTabla() {

  // const params = useParams();
  // const location = useLocation();
  const goToMascotasVer = useNavigate();
  
  // use state
  const [mascotas, setMascotas] = useState([]);

  const traerMascotas = async () => {
    // getMascotas().then(setMascotas);
    getMascotas().then((data) => {
      setMascotas(data);
    });
  };

  
  useEffect(() => {
    traerMascotas();
  }, []);

  return (
    <div className="row mt-4">
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered text-center">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Colores</th>
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
                <td>{m.mascota_activo.toString()}</td>
                <td>
                  <button
                    className="btn btn-secondary btn-block"
                    onClick={() => {
                      goToMascotasVer(`/mascotas/${m.mascota_id}`);
                    }}
                  >
                    Ver detalles
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MascotasTabla;

// import React, { useEffect, useState } from 'react'
// import { getMascotas } from '../../../services/mascotasServices';

// import { useNavigate, withRouter } from "react-router-dom";
// // La función withRouter es usada para obtener las propiedades de enrutamiento
// // (params, history, location, etc...) en un componente que NO haya sido
// // renderizado directamente por el componente <Route></Route>

// const MascotasTabla = (props) => {

//   const [mascotas, setMascotas] = useState([]);

//   const traerMascotas = async () => {
//     getMascotas().then((data) => {
//       setMascotas(data);
//     });
//   }

//   const goToMascotasVer = useNavigate();

//   useEffect(() => {
//     traerMascotas();
//   }, [])

//   return (
//     <div className="row mt-4">
//       <div className="table-responsive">
//         <table className="table table-striped table-hover table-bordered text-center">
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Nombre</th>
//               <th>Colores</th>
//               <th>Activo</th>
//               <th>Acciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               mascotas.map(m => (
//                 <tr key={m.mascota_id}>
//                   <td>{m.mascota_id}</td>
//                   <td>{m.mascota_nombre}</td>
//                   <td>{m.mascota_colores}</td>
//                   <td>{m.mascota_activo.toString()}</td>
//                   <td>
//                     <button className="btn btn-secondary btn-block"
//                       onClick={() => {
//                         goToMascotasVer(`/mascotas/${m.mascota_id}`);
//                       }}>
//                       Ver Detalles
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             }
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// // Cuando usamos la función withRouter como envoltura de un componente
// // el componente recibirá en sus props, todos los objetos de enrutamiento
// export default MascotasTabla
