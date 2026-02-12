import { useSelector, useDispatch } from "react-redux";
import { incrementByOne, incrementByFive } from "./Redux/counterSlice";
import "./App.css";

function App() {
  const countOne = useSelector((state) => state.counter.countOne);
  const countFive = useSelector((state) => state.counter.countFive);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="box">
        <h2>Counter +1</h2>
        <h1>{countOne}</h1>
        <button onClick={() => dispatch(incrementByOne())}>
          Increase +1
        </button>
      </div>

      <div className="box">
        <h2>Counter +5</h2>
        <h1>{countFive}</h1>
        <button onClick={() => dispatch(incrementByFive())}>
          Increase +5
        </button>
      </div>
    </div>
  );
}

export default App;
