const tablaCargando = document.getElementById("tabla-cargando");
const tablaCuerpo = document.getElementById("tabla-cuerpo");
const cargando = document.getElementById("cargando");
//botones de anterios y siguiente
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

//Este endpoint es para establecer un link con la Back-end
const endpoint = "https://reqres.in/api/users";

//Este link sera un link a la pagina de la Back-end
let page = 1;
let usuarios = [];

//ára dibujar la tabla en el html los usuarios se usa una const
const dibujarTabla = () => {
  //es para llamar a los usuarios
  let cadena = "";

  usuarios.forEach((usu) => {
    //en cada fila se coloca los usuarios
    cadena += `<tr>
                                   <td>${usu.id}</td>
                                   <td>${usu.email}</td>
                                   <td>${usu.first_name}</td>
                                   <td>${usu.last_name}</td>
                                   <td><img src="${usu.avatar}"/></td>
                              </tr>`;
  });
  tablaCuerpo.innerHTML = cadena;
};

//Funcion que trae los datos del end point
const getData = () => {
  //TO DO: colocar el texto o el efecto cargando o un spinner de bootstrap
  cargando.removeAttribute("hidden");
  //TO DO: ocultar tabla
  tablaCargando.setAttribute("hidden", true);

  fetch(`${endpoint}?page=${page}`).then((response) => {
    response.json().then((data) => {
      //console.log(data);
      usuarios = data.data;
      dibujarTabla();

      //To DO: borrar el efecto cargando...
      tablaCargando.removeAttribute("hidden");
      //TO DO: mostrar la tabla
      cargando.setAttribute("hidden", true);
    });
  });
};

getData();


btnSiguiente.onclick = () => {
     page += 1;
     getData();
};

btnAnterior.onclick = () => {
     if (page === 1) {
          return;
     }
     page -= 1;
     getData();
};
