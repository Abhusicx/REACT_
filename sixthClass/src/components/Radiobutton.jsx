import { useState } from "react";

const Radiobutton = () => {
  const [option, setOption] = useState("");
  return (
    <div>
      <h1>Radio button</h1>
      <input
        type="radio"
        id="option1"
        name="option"
        onChange={(e) => setOption(e.target.value)}
        value={"option1"}
      />
      <label htmlFor="option1">Option 1</label>

      <br />
      <br />

      <input
        type="radio"
        id="option2"
        name="option"
        onChange={(e) => setOption(e.target.value)}
        value={"option2"}
        defaultChecked
      />
      <label htmlFor="option2">Option 2</label>

      <br />
      <br />

      <input
        type="radio"
        id="option3"
        name="option1"
        onChange={(e) => setOption(e.target.value)}
        value={"option3"}
      />
      <label htmlFor="option3">Option 3</label>

      <br />
      <br />

      <h2>Selected Option: {option}</h2>
    </div>
  );
};

export default Radiobutton;
