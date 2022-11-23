import React from "react";

function App() {
  // const [count, setCount] = React.useState(0);
  const [count, setCount] = React.useState({ i: 0 });

  const increment = () => {
    //setCount(count + 1);
    setCount((x) => {
      return { i: x.i + 1 };
    });
  };

  const decrement = () => {
    //setCount(count - 1);
    // setCount((prevState) => prevState - 1);
    setCount((prevState) => ({ i: prevState.i - 1 }));
  };

  return (
    <div>
      <form>
        <input type="button" value="Increment" onClick={increment} />
        &nbsp;&nbsp;
        <input type="button" value="Decrement" onClick={decrement} />
      </form>

      <h1>Count: {count.i}</h1>
    </div>
  );
}

export default App;
