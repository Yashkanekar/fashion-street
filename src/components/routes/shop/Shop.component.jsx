import React, { useContext } from "react";
import { CategoriesContext } from "../../../contexts/CategoriesMapContext";
import ProductCard from "../../product-card/ProductCard.component";
import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="products-container">
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
    </div>
  );
};

export default Shop;
