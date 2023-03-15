import React from "react";
import "./directory.styles.scss";
import CategoryItem from "../directory-item/DirectoryItem.component";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
