import React, { useContext } from "react";
import { ProductsContext } from "../../../contexts/ProductsContext";
import ProductCard from "../../product-card/ProductCard.component";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
