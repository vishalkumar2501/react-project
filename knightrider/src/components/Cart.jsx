import React from "react";

function Cart({ cart }) {

  const totalAmount = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="cart">
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              {item.name} - ${item.price}
            </div>
          ))}
          <h3 className="total">Total: ${totalAmount}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;