import React, { useState } from "react";
import products from "./data";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import "./index.css";


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">
      <h1>Product List</h1>

      <div className="product-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      <Cart cart={cart} />
    </div>
   
  );
}

export default App;