import React from "react";

const Component1 = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function Increment() {
    setCount(count + 1);
  }

  function ToughTask(value) {
    console.log("Tough Task");
    for (let i = 0; i <= 1000000000; i++) {}
    return value * value;
  }

  useEffect(() => {
    console.log("re-render");
  });

  const result = useMemo(() => ToughTask(input), [input]);
  // const result = ToughTask(input);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={Increment}>Increment</button>
      <h1>{result}</h1>
      <button onClick={() => setInput(input + 1)}>Input: {input}</button>
    </div>
  );
};

export default Component1;
