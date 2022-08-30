import React, { useState } from "react";

const ItemCart = ({ product }) => {
  const [quantidade, setQuantidade] = useState(product.qt);
  if (!product) return;
  
  return (
    <>
      <td className="tdCol-1">
        <img src={product.image} alt="teste" className="imgCartItem" />
        <div>
          <span className="title-product-promo">{product.name}</span>
          <span className="full-price-promo">{product.price}</span>
        </div>
        <img src="icons/trashIcon.svg" className="iconTrash" />
      </td>
      <td className="tdCol-2">
        <span>
          <input
            min={0}
            max={100}
            type="number"
            defaultValue={parseFloat(quantidade)}
            onChange={(e) => {
              setQuantidade(e.target.value);
            }}
          />
        </span>
      </td>
      <td className="tdCol-3">
        <span>{product.discount}</span>
      </td>
      <td className="tdCol-4">
        <span className="total-price">
          R$ {(product.value * quantidade).toFixed(2).replace('.', ',')}
        </span>
      </td>
    </>
  );
};

export default ItemCart;
