import React from "react";

import Cyan from "./Cyan";
import Red from "./Red";

const Green = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        <Cyan category="Sporting Goods" />
        <Red product="Football" price={49.99} />
        <Red product="Baseball" price={150.0} />
        <Red product="Basket ball" price={33.45} />

        <Cyan category="Electronics" />
        <Red product="iPhone" price={1449.99} />
        <Red product="iTab" price={345.99} />
        <Red product="Laptop" price={5678.99} />
      </tbody>
    </table>
  );
};

export default Green;
