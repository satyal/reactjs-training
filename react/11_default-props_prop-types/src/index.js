import React from "react";
import ReactDOM from "react-dom/client";

import SayHello from "./SayHello";

const rootNode = document.getElementById("root");

const jsx = (
  <>
    <SayHello greeting="Hello" name="React" />
    <SayHello name={1000} />

    <SayHello />
  </>
);

ReactDOM.createRoot(rootNode).render(jsx);
