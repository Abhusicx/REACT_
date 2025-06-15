import './App.css'
import {useState , useMemo, useEffect, useCallback} from 'react'
import Component2 from './components/Component2';

const App = () => {
  const [count, setCount] = useState(0);

  // Memoize the callback function
  function handleClick(){
    setCount(count + 1);
  }

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment Count</button>
      <Component2 name="Vanshika" onButtonClick={handleClick} />
    </div>
  );
};

export default App;
