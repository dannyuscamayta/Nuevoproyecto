/**
Destructuracion de objetos -avanzado #2

*/

let mascota = {
  nombre: "Kyra",
  raza: "Bull Terrier",
  edad: 1,
};

//se crearia una nueva variable
// let nombre = mascota.nombre;
// console.log(nombre);

// con esta forma de destructarion se debe colocar el mismo nombre
// de la variable que destructura.
let { nombre, edad } = mascota;

console.log(nombre);
console.log(edad);

//Destructurando un atributo modificando el nombre de la nueva variable
let { raza: familia } = mascota;
//console.log(raza); //no existe la variable raza solo existe la variable familia
console.log(familia);

// ejemplo: Dado un objeto tipo pelicula ( estructura de MOVIE DB)

let pelicula = {
  popularity: 1578.677,
  vote_count: 1691,
  video: false,
  poster_path: "/8STWO9pUTqubPV04iXZ2R6SClME.jpg",
  id: 497582,
  adult: false,
  backdrop_path: "/kMe4TKMDNXTKptQPAdOF0oZHq3V.jpg",
  original_language: "en",
  original_title: "Enola Holmes",
  genre_ids: [80, 18, 9648],
  title: "Enola Holmes",
  vote_average: 7.7,
  overview:
    "Enola Holmes, una intrépida joven que busca a su madre, utiliza su brillante instinto investigador para superar a su hermano Sherlock y ayudar a un lord en su fuga.",
  release_date: "2020-09-23",
  pais: {
    lugar: "Estados Unidos",
    lat: -12.15321,
    lng: -54.353,
  },
};

const imprimirSinopsis = ({overview, title}) => {
     //La funcion recibe el overview desestructurado del objeto de tipo pelicula
     //ventajas: es eñ uso de la variable "overview"
     //desventaja: pierde el acceso da los demas atributos
     console.log(overview);
     console.log(title);
};

imprimirSinopsis(pelicula);

//ejemplo: destrcuturar la longitud del obejto pelicula
// let {pais: {lng}} = pelicula;
// console.log("longitud");
// console.log(lng);

//poniendo un nuevo nombre a la longitud
//destructurando pais y la longitud con una nueva variable de nombre "nuevaLongitud"
let {pais, pais: {lng: nuevaLongitud}} = pelicula;
console.log("longitud");
console.log(nuevaLongitud);