import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const departments = [
  { name: "HR", strength: 250 },
  { name: "Payroll", strength: 100 },
  { name: "Facilities", strength: 50 },
  { name: "Big Data", strength: 300 },
  { name: "Marketing", strength: 125 },
];

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App departments={departments} />);
