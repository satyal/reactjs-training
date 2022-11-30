import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
  const state = useSelector((state) => state);

  console.log("state: ", state);

  return <h1>{state.counter.count}</h1>;
};

export default Display;
