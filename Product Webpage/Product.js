// src/Product.js
import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>{product.returnPolicy}</p>
    </div>
  );
};

export default Product;
