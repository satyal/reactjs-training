import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const rootNode = document.getElementById("root");

//const jsx = <h1>Hello World!</h1>;
const jsx = <App />;

// ReactDOM.render(jsx, rootNode);
ReactDOM.createRoot(rootNode).render(jsx);
