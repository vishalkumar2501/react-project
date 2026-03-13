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
        <img className="logo" src="https://imgs.search.brave.com/fDp2jxjmDr-tPU9RZ8zJQFZumfoU_PVUFI13viufUa8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQx/NzY2NjM3Ni92ZWN0/b3IvZHluYW1pYy1i/cmlnaHQtc3VuLXJh/eXMtYnJhbmQtY29t/cGFueS1zeW1ib2wu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVA1elhNQUM4NmJj/MFVITHNOYXZVRDZy/dzNva1VJcG51Tmg0/SU9mR3hKcnc9" alt="" />
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


// my-react-app/
// │
// ├── public/
// │   └── index.html
// │
// ├── src/
// │   │
// │   ├── components/
// │   │   ├── ProductCard.jsx
// │   │   └── Cart.jsx
// │   │
// │   ├── data.js
// │   │
// │   ├── App.jsx
// │   ├── main.jsx   (agar Vite use kar rahe ho)
// │   ├── index.css
// │   │
// │   └── assets/    (optional - images ke liye)
// │
// ├── package.json
// └── README.md


// COMPONENE MAKING 
// LIFE CYCLE 
// PROPS ALL TYPE 
// STATES
// ONCHANGE 
// H0OKS
//map ,filter, reduce 

// Arrow Functions
// Objects
// Array Methods (map, filter, reduce)
// Spread Operator
// Destructuring
// Math functions

// Functional Components
// JSX
// useState
// Props
// Form Handling
// Event Handling
// List Rendering
// State Update