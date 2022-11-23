import React from "react";

import Child from "./Child";

function App() {
  return (
    <div>
      <h1>Parent</h1>

      <Child>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </Child>
    </div>
  );
}

export default App;
