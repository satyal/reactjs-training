import React from "react";

import CaptureText from "./CaptureText";

const App = () => {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");

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

      <hr />

      <form>
        <input type="text" onChange={textChanged} />
      </form>

      <CaptureText text={text} />
    </div>
  );
};

export default App;
