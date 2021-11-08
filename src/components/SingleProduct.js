import React from "react";

const SingleProduct = ({ product }) => {
  return (
    <div className="singleProduct">
      <span>{product.name}</span>
    </div>
  );
};

export default SingleProduct;
