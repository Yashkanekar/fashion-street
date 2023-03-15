import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "../../category/Category.component";
import CategoriesPreview from "../categories-preview/CategoriesPreview.component";
import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
