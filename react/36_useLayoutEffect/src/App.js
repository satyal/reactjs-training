import React from "react";

const App = () => {
  const [value1, setValue1] = React.useState(100);
  const [value2, setValue2] = React.useState(100);

  //useEffect is Asynchronous  (i.e. non-blocking)
  React.useEffect(() => {
    if (value1 === 0) {
      setValue1(10 + Math.random() * 200);
    }
  }, [value1]);

  //useEffect is Synchronous (i.e. blocking)
  React.useLayoutEffect(() => {
    if (value2 === 0) {
      setValue2(10 + Math.random() * 200);
    }
  }, [value2]);

  const firstH1Clicked = () => {
    setValue1(0);
  };

  const secondH1Clicked = () => {
    setValue2(0);
  };

  console.log("Rendered...");

  return (
    <div>
      <h1
        style={{ border: "1px red solid", userSelect: "none" }}
        onClick={firstH1Clicked}
      >
        {value1}
      </h1>

      <h1
        style={{ border: "1px blue solid", userSelect: "none" }}
        onClick={secondH1Clicked}
      >
        {value2}
      </h1>
    </div>
  );
};

export default App;
