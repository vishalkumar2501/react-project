import { useState } from "react";
import "./App.css";

import "h8k-components";
 
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setError("All fields are required.");
      return;
    }

    setError("");

    setSubmittedData({
      name: name,
      email: email,
      message: message
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <h8k-navbar header="Contact Form"></h8k-navbar>
      <div className="App">
        <h1>Contact Form</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            data-testid="name-input"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            data-testid="email-input"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            data-testid="message-input"
          />
          <button type="submit" data-testid="submit-button">
            Submit
          </button>
        </form>

        {error && (
          <p data-testid="error-message" className="error">
            {error}
          </p>
        )}

        {submittedData && (
          <div data-testid="submitted-data" className="submitted-data">
            <h2>Submitted Information</h2>
            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Message:</strong> {submittedData.message}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;



// import { useState } from "react";

// const App = () => {

//   // ===== STATE : STORE ALL TRANSACTIONS =====
//   const [transactions, setTransactions] = useState([
//     { id: 1, text: "Salary", amount: 5000 },
//     { id: 2, text: "Food", amount: -200 },
//     { id: 3, text: "Rent", amount: -1000 }
//   ]);

//   const [text, setText] = useState("");
//   const [amount, setAmount] = useState("");



//   // ===== FUNCTION 1 : CALCULATE INCOME AND EXPENSE =====
//   const sum = () => {

//     const result = transactions.reduce((acc, curr) => {
//         if (curr.amount > 0) {
//           acc.income += curr.amount;
//         } else {
//           acc.expense += Math.abs(curr.amount);
//         }

//         return acc;

//       },
//       { income: 0, expense: 0 }
//     );

//     return result;
//   };



//   // ===== FUNCTION 2 : ADD TRANSACTION =====
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (text === "" || Number(amount) === 0) return;

//     const maxId = transactions.length ? Math.max(...transactions.map(t => t.id)): 0;

//     const newTransaction = {
//       id: maxId + 1,
//       text: text,
//       amount: Number(amount)
//     };

//     setTransactions([...transactions, newTransaction]);

//     setText("");
//     setAmount("");
//   };



//   // ===== FUNCTION 3 : DELETE TRANSACTION =====
//   const deleteTransaction = (id) => {

//     const updated = transactions.filter(t => t.id !== id);

//     setTransactions(updated);
//   };



//   // ===== CALCULATE TOTALS =====
//   // ===== CALCULATE TOTALS =====
//   const totals = sum();



//   return (
//     <div>

//       <h1>Expense Tracker</h1>

//       {/* ===== SHOW TOTALS ===== */}
//       <h2>Income: {totals.income}</h2>
//       <h2>Expense: {totals.expense}</h2>



//       {/* ===== ADD TRANSACTION FORM ===== */}
//       <form onSubmit={handleSubmit}>

//         <input
//           type="text"
//           placeholder="Enter text"
//           value={text}
//           onChange={(e) =>
//          setText(e.target.value)}
//         />

//         <input
//           type="number"
//           placeholder="Enter amount"
//           value={amount}
//           onChange={(e) => 
//             setAmount(e.target.value)}
//         />

//         <button>Add Transaction</button>

//       </form>



//       {/* ===== RENDER TRANSACTIONS ===== */}
//       <ul>

//         {transactions.map((t) => (

//           <li key={t.id}>

//             {t.text} : {t.amount}

//             <button onClick={() => deleteTransaction(t.id)}>
//               Delete
//             </button>

//           </li>

//         ))}

//       </ul> 

//     </div>
//   );
// };

// export default App;



