import React from "react";
import Articulo from "./Articulo";

const Articulos = ({ blog = [] }) => {
  //console.log(props.blog);

  return (
    <div className="articulos">
      <h2>Tambien te puede interesar.</h2>
      {blog.map((art) => {
        return <Articulo key = {art.id} art={art} />;
      })}
    </div>
  );
};

export default Articulos;
