import React from "react";

import Display from "./Display";
import Form from "./Form";

// Lifting the state up pattern for component interaction
const App = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrement = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <>
      <Form increment={increment} decrement={decrement} />

      <Display count={count} />
    </>
  );
};

export default App;
