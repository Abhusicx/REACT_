import { useState } from 'react'

const DropDown = () => {
    const [option , setOption] = useState("");
    console.log(option);
  return (
    <div>
      <h1>DropDown</h1>
      <select onChange={(e) => setOption(e.target.value)} defaultValue={"select"}>
        <option value="option1" >Option 1</option>
        <option value="option2" >Option 2</option>
        <option value={"select"}> Select an option </option>
        <option value="option3" >Option 3</option>
      </select>

      <h1>value : {option}</h1>
    </div>
  )
}

export default DropDown
