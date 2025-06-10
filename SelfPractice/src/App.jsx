import { useEffect, useState, useRef} from 'react'
import './App.css'

function App() {

  const [count , setCount] = useState(0);
  let value = useRef(0);
  let button = useRef(null);

  function handleIncrement() {
    value.current = value.current + 1;
    console.log(value);
    setCount(count + 1);
  }

  function changeColor() {
    button.current.style.backgroundColor = "blue";
  }

  useEffect(() => {
    console.log("re-render");
  })

  return (
    <>
      <button ref={button} onClick={handleIncrement}>Increment</button>
      <h1>Count : {count}</h1>
      <button onClick={changeColor}>Change color of the Increment button</button>
    </>
  )
}

export default App
