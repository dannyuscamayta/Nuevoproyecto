/***
FUNCION PARA RECIBIR EL NOMBRE DE UN PAIS 
introducido por un usuario y mostrar
total de casos,
total de recuperados, total de fallecidos



*/

// *!function mostrarDataPais(pais) {
//      es lo mismo que la funcion de tipo flecha pero la de FLECHA ES MAS MODERNA
// *!}
//el esle no se debe usar en este caso FOR

const mostrarDataPorPais = (pais) => {
  //se aplicara un ciclo for
  for (let c = 0; c < covid.length; c++) {
    if (covid[c].country === pais) {
      console.log(covid[c]);
      break;
      //no se debe usar el ELSE (importante)
    } else {
      console.log("No se encontro en la posicion " + c);
    }
  }

  console.log("Fin de la funcion");
};

mostrarDataPorPais("Brazil");

//====================================
//otro ejercicio solo para saber total de casos recuperados

const mostrarDataPorPais1 = (pais) => {
  //se aplicara un ciclo for
  for (let c = 0; c < covid.length; c++) {
    if (covid[c].country === pais) {
      //console.log(covid[c]);
      let encontrado = {
        nombrePais: covid[c].country,
        totalCasos: covid[c].cases,
        totalRecuperados: covid[c].recovered,
        totalFallecidos: covid[c].deaths,
      };
      console.log(encontrado);
      return;
      //no se debe usar el ELSE (importante)
    }
  }
};

mostrarDataPorPais1("Brazil");

/**
==============================
el mismo ejercicio pero con la funcion FIND


*/

const mostrarDataPorPaisv2 = (pais) => {
  // vamos a usar el find y no devoveria por ejemplo el nombre del pais
  //FOREACH no retorna.
  const paisEncontrado = covid.find((estadistica) => {
    if (estadistica.country === pais) {
      return estadistica;
    }
  });

  console.log(paisEncontrado);
};

mostrarDataPorPaisv2("Peru");
