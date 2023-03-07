/** clase 21 minuto 57 dondee se cambia el return por una constante llamada objetoTemporal
y este objeto temporal vuelve con el return(objetoTemporal)
** EJERCICIOS CON DATA PELICULAS
EL ARCHIVO TENDRA QUE ESTAR ABIERTO EN UNA VENTANA DEL VSCODE

vamos a crear un segundo arreglo de peliculas que contenga solamente;
 el titulo,
la fecha de lanzamiento,
la sipnosis de la peli

al final, Imprimir el arreglo


*/

const peliculasResumen = () => {
  // se usaria un MAP xq necesita retornar todos los elementos en un arreglo, este recibe un callBack
  const resumenes = peliculas.map((pelicula) => {
    return {
      //esto es la creacion de un objeto implicito
      titulo: pelicula.title,
      estreno: pelicula.release_date,
      sinopsis: pelicula.overview,
    };
  });
  console.log(resumenes);
};

peliculasResumen();

//======================
//otro modo de llamar a las peliculas con el MAP

const peliculasLatinas = () => {
  const lenguaje = peliculas.map((peli) => {
    return {
      name: peli.title,
      language: peli.original_language,
    };
  });
  console.log(lenguaje);
};

peliculasLatinas();

//-----------------------------------------
/**
Ejercicio para filtrar y mostrar en un nuevo arreglo todas las pelis en idioma español

*/

const peliculasLanguageEs = () => {
  // esta constante se pone despues para comenzar a iterar y llamar finalmente
  const pelisFiltradas = peliculas.filter((pelicula) => {
    if (pelicula.original_language === "es") {
      return pelicula;
    }
  });
  console.log(pelisFiltradas);
};

peliculasLanguageEs();

//======================
/**
**FIND:
 para importar o  obtener los generos de las peliculas
se puede utilizar el FIND: este retorna el primer elemento que coincida con el primer poatron que coincida con el patron de busqueda
Si en caaso hubiera mas COINCIDENCIAS, de todasnformas la funcion find, solo retorna la 1ra coincidencia!
Si no EXISTEN coincidencias, este retornara como UNDEFINED
//======================
*/

const buscarGeneroById = (id) => {
  //se crea una constante para llamar al final
  const generoEncontrado = generos.find((genero) => {
    if (genero.id === id) {
      return genero;
    }
  });
  //Si el genero encontrado existe, sera diferente a undefined
  //console.log(generoEncontrado);
  if (generoEncontrado) {
    return generoEncontrado.name;
  } else {
    return null;
  }
};

console.log(buscarGeneroById(53));

//==============================
//filter : es casi lo mismo en encontrar el genero buscado

const buscarGenerosById = (id) => {
  //se crea una constante para llamar al final
  const generoEncontrado = generos.filter((genero) => {
    if (genero.id === id) {
      return genero;
    }
  });
  console.log(generoEncontrado);
};

buscarGenerosById(53);

/**
============================
Mostrar el arreglo de peliculas del cual
iteramos el arreglo de peliculas y obtenemos algo parecido al primer ejercicio, sin ids sino con 

funcion que retorna un nuevo arreglo de peliculas, donde cada pelicula tendra;
nombre del titulo,
sinopsis,
estreno,
generos ["", "", "", ]

Objetivo: USAR LA FUNCION buscarGenerosById();

*/

const resumenPeliculasConGeneros = () => {
  //el const se va despues
  const peliculasResumen = peliculas.map((pelis) => {
    //creamos un arreglo de generos de acuerdo a la pelicula en la que me encuentre ITERANDO (Usando un MAP que arma un arreglo nuevo) que buscara un nombresito para cada arreglo del otro js data
    // console.log(pelis.genre_ids);

    const generosStrings = pelis.genre_ids.map((idDelGenero) => {
      let nombre = buscarGeneroById(idDelGenero);
      return nombre;
    });

    //console.log(generosStrings);

    let objPeliResumen = {
      titulo: pelis.title,
      sinopsis: pelis.overview,
      estreno: pelis.release_date,
      generos: generosStrings,
    };
    return objPeliResumen;
  });
  console.log(peliculasResumen);
};

resumenPeliculasConGeneros();

/**
============================

*/
