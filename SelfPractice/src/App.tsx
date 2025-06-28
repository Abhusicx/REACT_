import { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeListbyId from "./components/EmployeeListbyId";

const App = () => {
   const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>Show/Hide</button>
      {show ? <EmployeeList/> : <EmployeeListbyId/>}
    </>
  )
}

export default App
