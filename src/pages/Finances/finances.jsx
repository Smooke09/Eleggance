import React from "react";
import "./finances.scss";
import RenderLineChart from "./graph";

const Finances = (props) => {
  return (
    <div className="container-all-finances">
      <div className="left-finances"></div>
      <div className="right-finances">
        <div className="nav-finances">
          <div className="nav-finances-title">
            <h2>Administracao</h2>
          </div>
          <div className="nav-finance-user">
            <h2>oioi</h2>
          </div>
        </div>
        <div className="cards-finances">
          <div className="div-card-finances">
            <h3> Reservas </h3>
            <h2> 0 </h2>
          </div>
          <div className="div-card-finances">
            <h3> Cupons gerados </h3>
            <h2> 0 </h2>
          </div>
          <div className="div-card-finances">
            <h3> Pedidos </h3>
            <h2> 0 </h2>
          </div>
          <div className="div-card-finances">
            <h3> Usuarios cadastrados </h3>
            <h2> 0 </h2>
          </div>
        </div>
        <div className="finances-graph">
          <div className="finances-graph-left">
            <div className="finances-graph-left-top">
              <h3>Vendas</h3>
              <p> de 25 de maio de 2022, 09:41 PM</p>
            </div>
            <div className="finances-graph-left-graph">
              <RenderLineChart />
            </div>
          </div>
          <div className="finances-graph-right">
            <div className="finances-graph-right-info">
              <h3>Pedidos Mensais</h3>
              <h2>0</h2>
            </div>
            <div className="finances-graph-right-info">
              <h3>Pedidos Mensais</h3>
              <h2>0</h2>
            </div>
            <div className="finances-graph-right-info">
              <h3>Pedidos Mensais</h3>
              <h2>0</h2>
            </div>
            <div className="finances-graph-right-info">
              <h3>Pedidos Mensais</h3>
              <h2>0</h2>
            </div>
          </div>
        </div>
        <div className="bottom-finance">
          <div className="bottom-finance-top">
            <div className="bottom-finance-top-titles">
              <h1>Vendas</h1>
            </div>
            <div className="bottom-finance-top-username">
              <p>
                De <input type="date" /> ate <input type="date" />{" "}
                <button>
                  ORDENAR POR{" "}
                </button>{" "}
              </p>
            </div>
          </div>
          <div className="finances-table">
            <table className="table-finances">
              <thead>
                <tr>
                  <td>Nome do produto </td>
                  <td>Quantidade</td>
                  <td>Valor</td>
                  <td>Codigo de venda</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Batom cor Rose Cremoso</td>
                  <td>2</td>
                  <td>99,98</td>
                  <td>123456</td>
                </tr>
                <tr>
                  <td>Batom cor Rose Cremoso</td>
                  <td>2</td>
                  <td>99,98</td>
                  <td>123456</td>
                </tr>
                <tr>
                  <td>Batom cor Rose Cremoso</td>
                  <td>2</td>
                  <td>99,98</td>
                  <td>123456</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="finance-value-final">
            <div className="finance-value-total">
              <h3>Valor Total: R$ 150,00</h3>
            </div>
            <div className="finance-total-sell">
              <h3> Vendas No Periodo: 777</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Finances;
