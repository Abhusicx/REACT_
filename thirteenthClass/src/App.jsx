import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment, decrement, reset, incrementByAmount } from './slice/counterSlice'
import Auth from './component/Auth'

function App() {

  const value = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function Increment () {
    dispatch(increment())
  }

  function Decrement () {
    dispatch(decrement())
  }

  function Reset () {
    dispatch(reset())
  }

  function IncrementByAmount(amount) {
    dispatch(incrementByAmount(amount))
  }

  return (
    <>
      <h1>{value}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={() => IncrementByAmount(5)}>Increment By 5</button>

      <hr /><hr />

      <Auth />
    </>
  )
}

export default App
