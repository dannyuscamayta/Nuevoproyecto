let iconURL = "http://openweathermap.org/img/wn/";
// esto es como se conceta a la API de weather api, mediante un endPoint
let endPoint =
  "https://api.openweathermap.org/data/2.5/weather?appid=af1c6e22e35fc774f764ccf1d50b431e&units=metric&q=";

// los IDs del html
const formBusqueda = document.getElementById("formBusqueda");
const inputBusqueda = document.getElementById("inputBusqueda");
const infoCiudad = document.getElementById("infoCiudad");
const infoImagen = document.getElementById("infoImagen");
const infoTemp = document.getElementById("infoTemp");
const infoTempMin = document.getElementById("infoTempMin");
const infoTempMax = document.getElementById("infoTempMax");
//para el cargando aparezca el spinner
const cargando = document.getElementById("cargando");

//esto sera para poner o setear la data que llega el backend o endpoint, avanzado con
//desestructuracion:
// const setInfo = ({main:{temp, temp_min, temp_max}, weather: [{icon}]}) => {
//      console.log(temp);
//      console.log(temp_min);
//      console.log(temp_max);
//      console.log(icon);
// };
//----------------------------------------------------
const setInfo = (data) => {
  const icono = data.weather[0].icon;
  infoImagen.src = `${iconURL}${icono}@2x.png`;
  infoTemp.innerText = data.main.temp;
  infoTempMin.innerText = data.main.temp_min;
  infoTempMax.innerText = data.main.temp_max;
  infoCiudad.innerText = data.name;
};

// una constante del buscador para validar el buscador
const getClima = () => {
  let busqueda = inputBusqueda.value.trim();
  //To Do: Colocar pantalla cargando
  fetch(`${endPoint}${busqueda}`).then((response) => {
    response.json().then((data) => {
      //console.log(data);
      if (data.cod !== 200) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Ups!',
          text: 'Ciudad no encontrada',
          timer: 1500,
          showConfirmButton: false,
        });
      } else {
        setInfo(data);
      }
      cargando.setAttribute("hidden", true);
    });
  });
};

formBusqueda.onsubmit = (e) => {
  e.preventDefault();
  
  cargando.removeAttribute("hidden");
  //To Do: validar que el input de busqueda tenga texto interno.
  getClima();
};
