import {useRef,useState} from 'react'

function Render() {
    const [count, updateCount] = useState(0);
    function checkCount(){
        console.log("re-Rendered");
        updateCount(count + 1);
    }
    let value =useRef(0);  //re render nhi hoga isse
    value.current +=1;
  return (
    
    <>
    <p>Count: {count}</p>
    <p>value: {value.current}</p>
    <button onClick={checkCount}>click me</button>
   
    </>
  )
}

export default Render