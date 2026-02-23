import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img" />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)} className="btn">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;