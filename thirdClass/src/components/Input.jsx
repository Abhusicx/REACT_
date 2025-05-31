import { useState } from "react"

const Input = () => {
    // const [val, setVal] = useState("abhijeet")
    const [count , setCount] = useState(0);

    function HandleClick(){
      setCount(count + 1);
    }
  return (
    // <div>
    //   <input type="text" value={val} placeholder="Enter text here" onChange={(e) => setVal(e.target.value)}/>
    //   <button onClick={() => setVal("")}>Clear</button>
    //   <h1>{val}</h1>
    // </div>
    <>
        <button onClick={HandleClick}>Count: {count}</button>
    </>
  )
}

export default Input
