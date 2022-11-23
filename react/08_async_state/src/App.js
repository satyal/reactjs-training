import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    //setCount(count + 1);

    setCount((x) => {
      return x + 1;
    });
  };

  const decrement = () => {
    //setCount(count - 1);

    setCount((prevState) => prevState - 1);
  };

  return (
    <div>
      <form>
        <input type="button" value="Increment" onClick={increment} />
        &nbsp;&nbsp;
        <input type="button" value="Decrement" onClick={decrement} />
      </form>

      <h1>Count: {count}</h1>
    </div>
  );
}

export default App;
