import React from "react";

import { useCounterContext } from "./contexts/counterContext";

const Form = () => {
  const { increment, decrement } = useCounterContext();

  return (
    <form>
      <input type="button" value="Increment" onClick={increment} />
      &nbsp;
      <input type="button" value="Decrement" onClick={decrement} />
    </form>
  );
};

export default Form;
