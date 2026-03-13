// components/TransactionItem.jsx
import React from "react";

const TransactionItem = ({ transaction, deleteTransaction }) => {
  const { id, text, amount, type } = transaction;

  return (
    <li
      style={{
        color: type === "income" ? "green" : "red",
        marginBottom: "10px",
      }}
    >
      {text} - ₹{amount} ({type})

      <button
        onClick={() => deleteTransaction(id)}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </li>
  );
};

export default TransactionItem;