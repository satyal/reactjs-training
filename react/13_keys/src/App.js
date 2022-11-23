import React from "react";

function App({ departments }) {
  const departmentsJSX = departments.map((department, index) => {
    return (
      <li key={index}>
        <strong>{department.name}</strong>
      </li>
    );
  });

  return <ul>{departmentsJSX}</ul>;
}

export default App;

/**
 * 
 * const departments = [
  { id: 100, name: "HR", strength: 250 },
  { id: 200, name: "Payroll", strength: 100 },
  { id: 300, name: "Facilities", strength: 50 },
  { id: 400, name: "Big Data", strength: 300 },
  { id: 500, name: "Marketing", strength: 125 },
];


[<div>HR</div>,
<div>Payroll</div>,
<div>Facilities</div>,
<div>Big Data</div>,
<div>Marketing</div>]
 */

/**
 * Input Array: [1, 2, 3, 4, 5]
 * Output Array: [1, 4, 9, 16, 25]
 */

// function square(value) {
//   return value * value;
// }

// const input = [1, 2, 3, 4, 5];

// const output = input.map(square);

// console.log(input, output);
