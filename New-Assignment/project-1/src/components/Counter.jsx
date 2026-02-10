import { useState } from "react";

function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(initialValue);
  };

  return (
    <div style={{ border: "1px solid black", padding: "15px", margin: "10px" }}>
      <h2>Counter: {count}</h2>

      <button onClick={increase}>+</button>
      <button onClick={decrease}>−</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;