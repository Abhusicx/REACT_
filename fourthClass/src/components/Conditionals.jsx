import { useState } from "react";
import Morning from "./Morning";
import Night from "./Night";

const Conditionals = () => {
    const [condition, setCondition] = useState();
    console.log("condition : " , condition);
    function setConditionFalse() {
        setCondition(false);
    }

    function setConditionTrue() {
        setCondition(true);
    }

  return (
    <div>
        <button onClick={setConditionFalse}>set condition false</button>
        <button onClick={setConditionTrue}>set condition true</button>
        {
            condition ? <Morning/> : <Night/>
            //condition           //if true                  //if false  
        }
    </div>
  )
}

export default Conditionals
