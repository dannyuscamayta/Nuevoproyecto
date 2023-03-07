/*
Vamos a atrapar a los ids

*/

const estilos = document.getElementById("estilos");
const btnTema = document.getElementById("btnTema");

btnTema.onclick = () => {
     
     const tema = estilos.getAttribute("href");
     if (tema === "./05-copia-card-smn2-light.css") {
          estilos.setAttribute("href", "./05-copia-card-smn2-dark.css");
     } else {
          estilos.setAttribute("href", "./05-copia-card-smn2-light.css");
          
     }
}



