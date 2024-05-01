import React from "react";

const BasketProduct = ({ item }) => {
  return (
    <div>
      <img src={item.image} alt={item.name} />
      <div>
        <p>{item.name}</p>
        <p>${item.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default BasketProduct;
