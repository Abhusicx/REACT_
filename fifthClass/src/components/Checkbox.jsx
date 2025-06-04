import { useState } from 'react'

const Checkbox = () => {
    const [check, setCheck] = useState([]);

    const handleCheck = (e) => {
        console.log(e.target.value, e.target.checked);
        if(e.target.checked){
            setCheck([...check, e.target.value]);
            console.log(check);
        } else {
            setCheck(check.filter(item => item !== e.target.value));
            console.log(check);
        }
    }

    function handleClear() {
        setCheck([]);
        console.log(check);
    }

  return (
    <>
        <h1>Checkbox</h1>
        <input type='checkbox' id='item1' onChange={handleCheck} value='Item 1'/>
        <label htmlFor='item1'>Item 1</label>
        <br/><br />
        <input type='checkbox' id='item2' onChange={handleCheck} value='Item 2'/>
        <label htmlFor='item2'>Item 2</label>
        <br/><br />
        <input type='checkbox' id='item3' onChange={handleCheck} value='Item 3'/> 
        <label htmlFor='item3'>Item 3</label>
        <br/><br />
        <input type='checkbox' id='item4' onChange={handleCheck} value='Item 4'/>
        <label htmlFor='item4'>Item 4</label>
        <br/><br />

        <button onClick={handleClear}>Clear</button>
        <br/><br />

        <h1>{check.join(', ')}</h1>
    </>
  )
}

export default Checkbox
