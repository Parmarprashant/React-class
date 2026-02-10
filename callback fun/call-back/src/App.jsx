import { useState } from "react";
import Child1 from './components/Child1.jsx';
import Child2 from "./components/Child2.jsx";

function Parent() {
  const [bgColor, setBgColor] = useState("white");

  const changeBg = () => {
    setBgColor("yellow"); 
  };

  return (
    <div>
      <Child1 bgColor={bgColor} />
      <Child2 changeBg={changeBg} />
    </div>
  );
}

export default Parent;

