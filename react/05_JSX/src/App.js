import React from "react";

function App() {
  const stringValue = "something";
  const numValue = 100.567;
  const boolValue = true;
  const arrayValue = [1, 2, 3];
  const jsxArray = [<div>One</div>, <div>Two</div>, <div>Three</div>];

  const testFunction = () => 2 + 3;

  return (
    <div>
      <div id="xyz" tabIndex={10}>
        {stringValue}
      </div>

      <div>{numValue}</div>

      <div>{boolValue ? "True" : "False"}</div>

      {boolValue && <div>prints if true</div>}

      <div>{arrayValue}</div>

      <div>{jsxArray}</div>

      <div>{testFunction()}</div>

      <div>{100 + 200}</div>

      <div>{Math.random()}</div>

      {/* <div>Just to demo commenting</div> */}
    </div>
  );
}

export default App;
