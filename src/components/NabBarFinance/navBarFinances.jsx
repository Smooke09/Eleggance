import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import { useFetch } from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";

import "../NabBarFinance/navBarFinances.scss";
import "./navBarFinances.scss";
export default (props) => {
  const { loginName } = useContext(AuthContext);
  const { linkImg } = useContext(AuthContext);

  const { data } = useFetch(`api/public/products/pages/1`);

  const [busca, setBusca] = useState();
  let objName = "";
  const a = data.filter(function (obj) {
    if (obj.name) {
      objName = obj.name.toUpperCase();
      if (objName.includes(busca)) {
        if (busca != "") {
          return objName;
        }
      }
    }
  });

  //========TOGGLE SEARCH ========//
  function toggleSearch() {
    var search = document.getElementById("search-products-finances");
    if (search.style.display === "none") {
      search.style.display = "block";
    } else {
      search.style.display = "none";
    }
  }

  return (
    <div className="container-nav-finances">
      <div className="nav-finances">
        <div className="nav-finances-title">
          <div className="finance-tittle">
            <h2 className="h1-nav-finances">{props.name}</h2>
          </div>
          <input
            id="search-products-finances"
            className="search-products-finances"
            onChange={(ev) => setBusca(ev.target.value.toUpperCase())}
          ></input>
          <label
            className="label-nav-finance"
            htmlFor="search-products-finances"
          >
            <button onClick={toggleSearch} className="button-search">
              <img className="icon-search" src="/icons/search.png" />
            </button>
          </label>

          <img className="icon-bell" src="/icons/notification.png" />
        </div>
        <div className="nav-finance-user">
          <span>{loginName.toUpperCase()}</span>
        </div>
      </div>
      <div className="search-produto">
        {a.map((produto, keys) => {
          return (
            <NavLink key={produto.id} to={"/detalhes"}>
              <div className="produto">
                <div className="produto-photo">
                  <img src={produto.url_img} />
                </div>
                <div className="container-produto">
                  <p className="produto-name"> {produto.name}</p>
                  <p className="produto-value">
                    {" "}
                    {"RS " +
                      produto.value +
                      ",00" +
                      "  ou em 10x de R$ " +
                      produto.value / 10 +
                      ",00"}
                  </p>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
