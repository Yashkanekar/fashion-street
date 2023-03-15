import React from "react";
import ProductCard from "../product-card/ProductCard.component";
import { Link } from "react-router-dom";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  console.log(title);
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          <span className="title">{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default CategoryPreview;
