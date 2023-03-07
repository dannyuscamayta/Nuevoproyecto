/**
Creando una funcion exportable individualmente.
*/

export const saludar = () => {
     console.log("Hola bienvenidos a todos!!");
};

const despedida = () => {
     console.log("Este es un mensaje de despedida");
};

// Export default exporta un elemento (ejm. variable, clase, funcion, etc)
//que cuando sea importado en otro archivo este puede ser renombrado
//NOTA: solo puede haber un export default x cada archivo.

export default despedida;