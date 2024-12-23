import { useEffect, useState } from "react";
import './App.css';

function App() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    const savedCount = localStorage.getItem("counterValue");
    if (savedCount !== null) {
      setCount(JSON.parse(savedCount));
    }
  }, []);

  let increment = () => {
    setCount(count + 1);
    localStorage.setItem("counterValue", JSON.stringify(count + 1));
  };
  let decrement = () => {
    setCount(count - 1);
    localStorage.setItem("counterValue", JSON.stringify(count - 1));
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <div className="counter">
        <button onClick={decrement}>-</button>
        <h2>{count}</h2>
        <button onClick={increment}>+</button>
      </div>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default App;

