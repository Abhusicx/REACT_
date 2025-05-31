import './App.css'

function App() {
    const name = 'priyanshu';
    const a = 'shailja';
    const b = 'shailja';
    function handleClick() {
        alert("mujhe ku click kiya");
        console.log("mujhe click kiya");
    }
    function handleClick2(c, d) {
        return c + " " + d;
    }
    //object
    const object  = {
      name : "tanvi",
      email: "tanvi@gmail.com",
      age: 28
    }

    //array
    const array = ['priyanshu', 'shailja', 'tanvi', 'abhijeet', 'vanshika'];
  return (
    <>
      <h1>hello {name}</h1>
      <h1>{10 + 10}</h1>
      <h1>{a + " " + b}</h1>
      <button onClick={() => alert("me click ho gya")}>Mujhe click karo</button>
      <button onClick = {handleClick}>Click me</button>
      <button onClick={() => alert(handleClick2(10 , 100))}>Click me 2</button>
      <h1>{object.name}</h1>
      <h1>{object.email}</h1>
      <h1>{object.age}</h1>
      <h1>{array[4]}</h1>
    </>
  )
}

export default App