import React, { useContext } from "react";
import { ProductsContext } from "../../../contexts/ProductsContext";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {products.map(({ name, id }) => (
        <div key={id}>
          <h2>{name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Shop;
