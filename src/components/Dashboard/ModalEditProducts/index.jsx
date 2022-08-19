import React, { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import Api from "../../../api/api";
import { useEffect } from "react";

export default function ModalEditProduct() {
  const { data } = useFetch(`api/public/products/pages/1`);

  var product = JSON.parse(localStorage.getItem('produto'))
  // console.log(product)


  const buttons = document.querySelectorAll(".editButton")
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      product = JSON.parse(localStorage.getItem('produto'))
      setValor({
        name: product.name,
        description: product.description,
        value: product.value,
        qt: product.qt
      })
      console.log('update')
    })
  })

  const [valor, setValor] = useState({
    name: product.name,
    description: product.description,
    value: product.value,
    // brand: product.brand,
    qt: product.qt,
    // url_img: "",
  });

  function postItem() {
    // TROCAR PRA PUT
    Api.post(`api/protected/product`, valor)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function modalToggle() {
    let modalEdit = document.getElementById("modalEditProducts");
    modalEdit.classList.toggle("open");
  }
  return (
    <div className="modalEditProducts" id="modalEditProducts">
      <div className="header-modal">
        <h1>Editar Produto</h1>
        <button onClick={modalToggle}>X</button>
      </div>
      <div className="body-modal">
        <div className="main-modal">
          <label>Nome Do Produto:</label>
          <input
            maxLength={45}
            type="text"
            value={valor.name}
            onChange={(e) => setValor({ ...valor, name: e.target.value })}
          />
          <label>Valor:</label>
          <input
            type="number"
            value={valor.value}
            onChange={(e) => setValor({ ...valor, price: e.target.value })}
          />
          <label>Descrição:</label>
          <input
            maxLength={255}
            type="text"
            value={valor.description}
            onChange={(e) => setValor({ ...valor, description: e.target.value })}
          />
          <label>Categoria</label>
          <input
            maxLength={45}
            type="text"
            value={valor.brand}
            onChange={(e) => setValor({ ...valor, brand: e.target.value })}
          />
          <label>Quantidade Disponível</label>
          <input
            maxLength={3}
            type="number"
            value={valor.qt}
            onChange={(e) =>
              setValor({
                ...valor,
                qt: e.target.value,
              })
            }
          />
          <label>Foto Do Produto</label>
          <input
            type="file"
            className="inputPhoto"
            value={valor.url_img}
            onChange={(e) => setValor({ ...valor, url_img: e.target.value })}
          />
        </div>
        <div className="productVisualization">
          <p>Visualização</p>
          <div className="productAndInfo">
            <img src="/product.png" alt="" />
            <div className="productInfo">
              <h4>Tratamento Único belkit</h4>
              <h1>R$ 45,99</h1>
              <p>10x de R$4,99 sem juros</p>
              <p>Frete Grátis</p>
              <h5>O tratamento único Belkit melhora a força e resistência do cabelo...</h5>
            </div>
          </div>
          <div className="areaBtn">
            <button className="btn btnCadastrarProduto" onClick={postItem}>
              EDITAR
            </button>
            <div className="btn btnCancelarCadastrarProduto" onClick={modalToggle}>
              CANCELAR
            </div>
          </div>
        </div>
      </div>
      {/* <div className="main-modal">
        <label>Nome Do Produto:</label>
        <input maxLength={45} type="text" />
        <label>Valor:</label>
        <input max={5} type="number" />
        <label>Descrição</label>
        <input maxLength={255} type="text" />
        <label>Categoria</label>
        <input maxLength={45} type="text" />
        <label>Quantidade Disponível</label>
        <input maxLength={3} type="number" />
        <label>Foto Do Produto</label>
        <input type="file" className="inputPhoto" />
      </div> */}
      {/* <div className="areaBtn">
        <div className="btn btnCadastrarProduto">Cadastrar Produto</div>
        <div className="btn btnCancelarCadastrarProduto">Cancelar</div>
      </div> */}
    </div>
  );
}
