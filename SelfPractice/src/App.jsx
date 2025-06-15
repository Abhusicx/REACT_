import { use } from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
    const [num , setNum] = useState(0);
    const number = useSelector((state) => state.counter.value);

  return (
    <>
        <h1>{num}</h1>
        <button onClick={() => useDispatch(increment())}>Increment</button>
        <button onClick={() => useDispatch(decrement())}>Decrement</button>
    </>
  )
}

export default App
