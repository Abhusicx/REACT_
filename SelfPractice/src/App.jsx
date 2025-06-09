import { createContext, useState } from "react";
import LiftingUP from "./components/LiftingUP";
import ChildComponent from "./components/ChildComponent";
import ChildA from "./components/UseContext/ChildA";

const User = createContext();

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [name, setName] = useState("Abhijeet");

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleClick}>{count}</button>
      {/* <UseEffect count={count} /> */}
      <LiftingUP input={input} setInput={setInput}/>
      <ChildComponent input={input}/>

      <hr />
      <hr />

      <User.Provider value={name}>
        <ChildA/>
      </User.Provider>
    </>
  )
}

export default App
export {User}
