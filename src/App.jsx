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

  useEffect(() => {
    localStorage.setItem("counterValue", JSON.stringify(count));
    console.log("Stored count:", count);
  }, [count]);

  return (
    <>
      <h1>Count: {count}</h1>
      <div className="counter">
        <button onClick={() => setCount(count - 1)}>-</button>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default App;

