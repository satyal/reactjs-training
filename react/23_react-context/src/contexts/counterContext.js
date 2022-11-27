import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export function CounterContextProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrement = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <CounterContext.Provider
      value={{ count: count, increment: increment, decrement: decrement }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export function useCounterContext() {
  return useContext(CounterContext);
}
