import React, { useContext } from "react";
import { StoreContext } from "../context-reducer/StoreContext";

const Product = ({ item }) => {
  const { addToBasket } = useContext(StoreContext);
  const handleAdd = () => {
    addToBasket(item);
  };
  return (
    <div className="mx-auto px-8 border border-gray-200">
      <img src={item.image} alt="glasses" />

      <div className="flex flex-row items-center justify-between py-4">
        <div>
          <p className="text-xl">{item.name}</p>
          <p className="text-lg">${item.price}</p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-red-500 text-white text-lg font-medium rounded-full p-4"
        >
          {" "}
          add to basket
        </button>
      </div>
    </div>
  );
};

export default Product;
