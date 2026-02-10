import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, addByAmount } from "./counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [number, setNumber] = useState("");

  const handleAdd = () => {
    dispatch(addByAmount(Number(number)));
    setNumber("");
  };

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <br /><br />

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter number"
      />

      <button onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default App;
