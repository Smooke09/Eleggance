import React, { useState } from "react";
import "./Carrousel.scss";
import SpinerLoader from "../SpinerLoader";

const Card = ({ product }) => {
  const [loading, setLoading] = useState(true);

  const valorConvertido = product.value.toFixed(2);
  const valorFormatado = valorConvertido.toString().replace(".", ",");
  const priceParceled = (product.value / 10).toFixed(2);
  const priceParceledFormatado = priceParceled.toString().replace(".", ",");

  const renderProductDiscount = (product) => {
    if (product.offer) {
      let discount = product.pricepromo.toFixed(2);
      let discountFormatado = discount.toString().replace(".", ",");
      let priceParceled = (product.pricepromo / 10).toFixed(2);
      let priceParceledFormatado = priceParceled.toString().replace(".", ",");

      return (
        <div className="product-offer">
          <span className="cash-payment">à vista</span>
          <p className="price-installments">
            R<span>$</span>
            {discountFormatado}
          </p>
          <span>
            ou em
            <span
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "#000",
                marginLeft: "5px",
              }}
            >
              10x
            </span>
            <br />
          </span>
          <p className="price-installments-parceled">
            R<span>$</span>
            {priceParceledFormatado}
          </p>
        </div>
      );
    } else {
      return (
        <>
          <span className="cash-payment">à vista</span>
          <p className="price-installments">
            R<span>$</span>
            {valorFormatado}
          </p>
          <span>
            ou em
            <span
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "#000",
                marginLeft: "5px",
              }}
            >
              12x
            </span>
            <br />
          </span>
          <p className="price-installments-parceled">
            R<span>$</span>
            {priceParceledFormatado}
          </p>
        </>
      );
    }
  };

  if (!product) return;

  return (
    <div className="container-card">
      <div className="container-img-promo">
        {loading && <SpinerLoader />}
        {product.offer ? (
          <div className="img-container">
            <img
              src={product.url_img}
              alt="imagem do produto"
              onLoad={() => setLoading(false)}
            />
            <span></span>
          </div>
        ) : (
          <div className="img-container">
            <img
              src={product.url_img}
              alt="imagem do produto"
              onLoad={() => setLoading(false)}
            />
          </div>
        )}
        <div className="container-text-product">
          <div className="title-product">
            <p className="title-product-promo">{product.name}</p>
          </div>
          {renderProductDiscount(product)}
        </div>
        <button className="button-buy-card">
          <img src="/icons/ShopCart.png" alt="iconCarrinho" />
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Card;
