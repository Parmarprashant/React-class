import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <h1>Counter Dashboard</h1>

      <Counter initialValue={0} />
      <Counter initialValue={0} />
      <Counter initialValue={0} />
    </div>
  );
}

export default App;