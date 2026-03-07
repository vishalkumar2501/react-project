import { useState } from "react";

const App = () => {

  // ===== STATE : STORE ALL TRANSACTIONS =====
  const [transactions, setTransactions] = useState([
    // { id: 1, text: "Salary", amount: 5000 },
    // { id: 2, text: "Food", amount: -200 },
    // { id: 3, text: "Rent", amount: -1000 }
  ]);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");



  // ===== FUNCTION 1 : CALCULATE INCOME AND EXPENSE =====
  const sum = () => {

    const result = transactions.reduce((acc, curr) => {
        if (curr.amount > 0) {
          acc.income += curr.amount;
        } else {
          acc.expense += Math.abs(curr.amount);
        }

        return acc;

      },
      { income: 0, expense: 0 }
    );

    return result;
  };



  // ===== FUNCTION 2 : ADD TRANSACTION =====
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "" || Number(amount) === 0) return;

    const maxId = transactions.length ? Math.max(...transactions.map(t => t.id)): 0;

    const newTransaction = {
      id: maxId + 1,
      text: text,
      amount: Number(amount)
    };

    setTransactions([...transactions, newTransaction]);

    setText("");
    setAmount("");
  };



  // ===== FUNCTION 3 : DELETE TRANSACTION =====
  const deleteTransaction = (id) => {

    const updated = transactions.filter(t => t.id !== id);

    setTransactions(updated);
  };



  // ===== CALCULATE TOTALS =====
  const totals = sum();



  return (
    <div>

      <h1>Expense Tracker</h1>

      {/* ===== SHOW TOTALS ===== */}
      <h3>Income: {totals.income}</h3>
      <h3>Expense: {totals.expense}</h3>



      {/* ===== ADD TRANSACTION FORM ===== */}
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={(e) =>
         setText(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => 
            setAmount(e.target.value)}
        />

        <button>Add Transaction</button>

      </form>



      {/* ===== RENDER TRANSACTIONS ===== */}
      <ul>

        {transactions.map((t) => (

          <li key={t.id}>

            {t.text} : {t.amount}

            <button onClick={() => deleteTransaction(t.id)}>
              Delete
            </button>

          </li>

        ))}

      </ul>

    </div>
  );
};

export default App;