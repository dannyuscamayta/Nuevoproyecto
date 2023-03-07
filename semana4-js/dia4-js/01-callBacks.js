/**
CALL BACKS EN JS

es cuando mandamos una primera funcion


*/

//arreglos;
const nombres = ["jorge", "luis", "carlos"];
const dnis = ["20002020", "44548844", "01245873"];
 

//FUNCION NORMAL PARA COMPARAR CON LA DE ABAJO, CALLBACK
/*
const buscarPorDNI = (dni) => {
    for (let c = 0; c < dnis.length; c++) {
        //que se va hacer en cada vuelta?
        if (dnis [c] === dni) {
            console.log(nombres[c]);
            // break; //el return tiene la misma funcion o poder de un break, 
            return;
        }
    }
};

buscarPorDNI("44548844");

*/

// un callback es cuando mandamos a una funcion otro paramemetro de otra funcion es como una especie de retorno 
//

const buscarPorDNI = (dni, callback) => {
    for (let c = 0; c < dnis.length; c++) {
        //que se va hacer en cada vuelta?
        //debugger;
        if (dnis [c] === dni) {
            //console.log(nombres[c]);

            callback(nombres[c]); //se le tiene que pasar unparametro a la linea del resultado (encontrado)
            // break; //el return tiene la misma funcion o poder de un break, 
            // return;
        }
    }
};

// const resultado = (encontrado) => {
    
//     console.log("llego el resultado! 😅");
//     console.log(encontrado);
// };
//se puede mandar callbacks como segundo dato o tambien un arreglo,
//primera forma de declarar una funcion call back
//buscarPorDNI("44548844", resultado);

//-----------2da forma de declararlo la misma funcion 

buscarPorDNI("44548844", (encontrado) => {
    console.log("llegó el resultado! 😎");
    console.log(encontrado);
});



