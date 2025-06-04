import { useState } from "react";

const Checkbox = () => {
    const [check, setCheck] = useState([]);
    const handleCheck = (e) => {
        console.log(e.target.value, e.target.checked);
        if(e.target.checked) {
            setCheck([...check, e.target.value]);
        }else{
            setCheck([...check.filter(item => item !== e.target.value)]);
        }
    }
  return (
    <div>
        <h1>Checkbox</h1>
        <input onChange={handleCheck} type="checkbox" id="checkbox1" value="Item 1"/>
        <label htmlFor="checkbox1">Item 1</label>

        <input onChange={handleCheck} type="checkbox" id="checkbox2" value="Item 2"/>
        <label htmlFor="checkbox2">Item 2</label>

        <input onChange={handleCheck} type="checkbox" id="checkbox3" value="Item 3"/>        
        <label htmlFor="checkbox3">Item 3</label>

        <button onClick={() => setCheck([])}>Clear</button>
        <button onClick={() => setCheck(["Item 1", "Item 2", "Item 3"])}>Submit</button>

        <h1>{check.join(', ')}</h1>
    </div>
  )
}

export default Checkbox
 