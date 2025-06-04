import UseEffect from "./components/UseEffect"
import { useState } from "react"

function App() {

  console.log("re-render from app.jsx")

  const [number, setNumber] = useState(0);

  function handleClick() {
    setNumber(number + 2);
  }

  return (
    <>
      <button onClick={handleClick}>{number}</button>
      <br />
      <br />
      <br />
      <UseEffect data={number} />
    </>
  )
}

export default App
