import React from "react";

import { useDispatch } from "react-redux";

import { increment, decrement } from "./redux/counterReducer";

const Form = () => {
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <form>
      <input type="button" value="Increment" onClick={incrementHandler} />
      &nbsp;&nbsp;
      <input type="button" value="Decrement" onClick={decrementHandler} />
    </form>
  );
};

export default Form;
