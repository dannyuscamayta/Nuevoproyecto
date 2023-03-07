# Uso de HOOKS de estado y efecto en React

## Que es `useState`
es una funcion que ayuda a crear variables de estado
> Una variable de estado, es aquella que ayuda a actualizar el DOM, cada vez que esta, modifica su valor. 

### NOTA: las variables de estado no se acrualiza manualmente, para ello está la funcion que actualiza la variable de estado, useState

## esto es lo mismo a decir lo del codigo de abajo;
```
  const arreglo = useState(0);
  const c = arreglo[0];
  const actualizarC = arreglo[1];
```
```
  const [c, actualizarC] = useState(0);
```