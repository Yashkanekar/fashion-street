import React, { Fragment, useContext } from "react";
import { CategoriesContext } from "../../../contexts/CategoriesContext";
import CategoryPreview from "../../category-preview/CategoryPreview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {
        // "Object.keys(categoriesMap)"  gives back an array of all the key values from 'categoriesMap' object.
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      }
    </>
  );
};

export default CategoriesPreview;
