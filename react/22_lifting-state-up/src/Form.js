import React from "react";

const Form = ({ increment, decrement }) => {
  return (
    <form>
      <input type="button" value="Increment" onClick={increment} />
      &nbsp;
      <input type="button" value="Decrement" onClick={decrement} />
    </form>
  );
};

export default Form;
