import React from 'react';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Price: ${product.price}</p>
      <p>Status: {product.status}</p>
    </div>
  );
}

export default ProductItem;
