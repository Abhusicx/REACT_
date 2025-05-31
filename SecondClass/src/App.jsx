import './App.css'
import Component1 from './components/Component1'

function App() {
  const object = {
    name: "Tanvi Aggrawal",
    age: 10,
    school: "Rangarh"
  }
  return (
    <>
      <h1>hello</h1>
      <Component1 />
      <h1>{object.name}</h1>
    </>
  )
}

export default App
