import React from "react";
import "./infoproduct.scss";

export default (props) => {
  return (
    <div className="container-info-product">
      <ul>
        <li>
          <h3>{props.data.name}</h3>
        </li>
        <li>
          <h4> Informações dos Produtos </h4>
        </li>
        <li>
          <p>{props.data.description}</p>
        </li>
        <li>
          <h4>Modo de usar</h4>
        </li>
        <li>
          {/* Tem que colocar o modo de usar e as precaucoes no banco de dados junto com o produto
           */}
          <p>Puxar do banco de dados</p>
        </li>
        <li>
          <h4>Precauções</h4>
        </li>
        <li>
          <p>Puxar do banco de dados</p>
        </li>
        <li>
          <h4>Dicas</h4>
        </li>
        <li>
          <p>Puxar do banco de dados</p>
        </li>
      </ul>
    </div>
  );
};
