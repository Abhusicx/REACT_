import Component1 from "./components/Component1"
import Component2 from "./components/Component2"
import Component3 from "./components/Component3"
import Input from "./components/Input"

function App() {

  return (
    <>
      {/* <Component1> 
        <Component2 />
        <Component3 />
      </Component1> */}

      <Input/>
      <Component1> <Component2/> </Component1>
    </>
  )
}

export default App
