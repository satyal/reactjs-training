import React from "react";

import Form from "./Form";
import Display from "./Display";

import APICall from "./APICall";

const App = () => {
  const [state, dispatch] = React.useReducer(counterReducer, {
    count: 0,
  });

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <Form
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
      />
      <Display count={state.count} />

      <hr />

      <APICall />
    </div>
  );
};

export default App;

function counterReducer(prevState, action) {
  let newState;

  switch (action?.type) {
    case "INCREMENT":
      newState = { ...prevState, count: prevState.count + 1 };
      break;

    case "DECREMENT":
      newState = { ...prevState, count: prevState.count - 1 };
      break;

    default:
      newState = prevState;
      break;
  }

  return newState;
}
