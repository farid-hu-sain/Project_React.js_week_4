import React, { memo } from "react";

const ProductCard = memo(({ product, onAdd }) => (
  <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
    <img src={product.image} alt={product.title} style={{ width: 100, height: 100, objectFit: "contain" }} />
    <h4>{product.title}</h4>
    <p>${product.price}</p>
    <button onClick={() => onAdd(product)}>Add to Cart</button>
  </div>
));

export default ProductCard;
