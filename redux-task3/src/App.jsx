import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Recipe from "./Pages/Recipe";
import Clothes from "./Pages/Clothes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/food" element={<Food />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/clothes" element={<Clothes />} />
      </Routes>
    </>
  );
}

export default App;
