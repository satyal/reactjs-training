import React, { lazy, Suspense } from "react";

import MoonLoader from "react-spinners/MoonLoader";

// import CaptureText from "./CaptureText";

//Dynamic importing with React.lazy
const CaptureText = lazy(() => import("./CaptureText"));

const App = () => {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrement = () => {
    setCount((prevState) => prevState - 1);
  };

  const textChanged = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="button" value="Increment" onClick={increment} />
        &nbsp;&nbsp;
        <input type="button" value="Decrement" onClick={decrement} />
      </form>

      <h1>{count}</h1>

      <hr />

      <Suspense
        fallback={
          <MoonLoader
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        }
      >
        <CaptureText text={text} textChanged={textChanged} />
      </Suspense>
    </div>
  );
};

export default App;
