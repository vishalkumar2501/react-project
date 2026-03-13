// components/TransactionList.jsx
import React from "react";
import TransactionItem from "./TransactionItem";

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <ul>
      {transactions.map((item) => (
        <TransactionItem
          key={item.id}
          transaction={item}
          deleteTransaction={deleteTransaction}
        />
      ))}
    </ul>
  );
};

export default TransactionList;