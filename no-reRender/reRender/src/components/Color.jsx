import {useRef} from 'react'

function Color() {
    let color = useRef();
    function updateColor(){
        color.current.style.color = "red";
    }
  return (
    <>
    <p ref = {color}>Hello</p>
<button onClick={updateColor}>Click me</button>
    </>
  )
}

export default Color