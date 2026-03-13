// App.js
import React, { useState } from "react";
import Form from "./components/Form";
import TransactionList from "./components/TransactionList";
import { sum } from "./Utils";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    const filtered = transactions.filter((item) => item.id !== id);
    setTransactions(filtered);
  };

  const { income, expense } = sum(transactions);

  return (
    <div style={{ padding: "20px" }}>
      <h2>💰 Expense Tracker</h2>

      <Form addTransaction={addTransaction} />

      <h3>Total Income: ₹{income}</h3>
      <h3>Total Expense: ₹{expense}</h3>

      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default App;

// src/
//  ├── App.js
//  ├── Utils.js
//  ├── components/
//  │    ├── Form.jsx
//  │    ├── TransactionList.jsx
//  │    └── TransactionItem.jsx