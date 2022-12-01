import React from "react";

const Form = ({ incrementHandler, decrementHandler }) => {
  return (
    <form>
      <input type="button" value="Increment" onClick={incrementHandler} />
      &nbsp;&nbsp;
      <input type="button" value="Decrement" onClick={decrementHandler} />
    </form>
  );
};

export default Form;
