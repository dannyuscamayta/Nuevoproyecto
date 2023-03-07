## Mis notas de React

textos normales 
> referencias y mas referencias
A continuacion un comando `npm start`

1. Paso 1
2. Paso 2
   
```
import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Hello world!!</h1>
    </div>
  );
};

export default App;
```

### Un componente solo puede retornar un elemento, es decir un solo padre o una 
envoltura que contenga a todo el HTML

## este puede ser un Section, un div, un Article etc...
o tambien puede ir vacio sin ninguna etiqueta
```
import React from 'react';

const App = () => {
  return (
    <section>
      <h1>Hello world!!</h1>
      <p> lorem ipsum </p>
    </section>
  );
};

export default App;
```

## Componentes
La comunicación de componentes es de 
> Padre a Hijo

App => Articulos

> La comunicacion de los componentes solo se da de Padre a Hijo y es a traves de los `props`

padre 


> <Articulo numero = {56} suma = {90}/>

> const Articulos = (props) => {

  return (<></>)
}