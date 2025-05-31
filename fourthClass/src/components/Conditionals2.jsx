import React, { useState } from 'react'

const Conditionals2 = () => {
    const [count , setCount ] = useState(0);

    function Increment(){
        setCount(count + 1);
    }
  return (
    <div>
      <button onClick={Increment}>Count : {count}</button>
      {
        count == 0 ? "zero" : 
        count == 1 ? "one" :
        count == 2 ? "two" :
        count == 3 ? "three" :
        count == 4 ? "four" :
        count == 5 ? "five" :
        count == 6 ? "six" :
        "me toh ab ni gin raha"
      }
    </div>
  )
}

export default Conditionals2
