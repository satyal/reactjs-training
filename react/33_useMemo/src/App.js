import React, { useMemo } from "react";

import CaptureText from "./CaptureText";

const App = () => {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");

  const calculatedValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrement = () => {
    setCount((prevState) => prevState - 1);
  };

  const textChanged = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="button" value="Increment" onClick={increment} />
        &nbsp;&nbsp;
        <input type="button" value="Decrement" onClick={decrement} />
      </form>

      <h1>{count}</h1>

      <h1>Calculation: {calculatedValue}</h1>

      <hr />

      <CaptureText text={text} textChanged={textChanged} />
    </div>
  );
};

export default App;

function expensiveCalculation(num) {
  console.log("Calculating...");

  for (let index = 0; index < 1000000000; index++) {
    num++;
  }

  console.log("Calculated.");

  return num;
}
