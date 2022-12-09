import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Home from "./Home";
import ExampleOne from "./ExampleOne";
import ExampleTwo from "./ExampleTwo";
import ExampleThree from "./ExampleThree";
import ExampleFour from "./ExampleFour";
import ExampleFive from "./ExampleFive";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/example-one">One</Link>
        </li>

        <li>
          <Link to="/example-two">Two</Link>
        </li>

        <li>
          <Link to="/example-three">Three</Link>
        </li>

        <li>
          <Link to="/example-four">Four</Link>
        </li>

        <li>
          <Link to="/example-five">Five</Link>
        </li>
      </ul>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example-one" element={<ExampleOne />} />
        <Route
          path="/example-two"
          element={<ExampleTwo testProp="testing only" />}
        />
        <Route path="/example-three" element={<ExampleThree />} />
        <Route path="/example-four" element={<ExampleFour />} />

        <Route
          path="/example-five"
          element={<ExampleFive testProp="testing only" />}
        />
      </Routes>
    </div>
  );
};

export default App;
