/**
AXIOS = 
*/

axios.get("https://reqres.in/api/users").then((resultado) => {
     console.log(resultado);
});

axios.get("https://api.themoviedb.org/3/movie/popular?api_key=105eb79aa1e6df60a2b95878ad2289aa&language=es-ES&page=1").then((resultado1) => {
     console.log(resultado1.data);
});

