import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(prev => prev + 1);
  }

  function handleDecrement() {
    setCount(prev => prev - 1);
  }

  useEffect(() => {
    console.log("Updated Count:", count);
  }, [count]);

  return (
    <>
      <h1>Counter App</h1>
      <h3>Count = {count}</h3>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  );
}
