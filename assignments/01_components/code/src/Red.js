import React from "react";

const Red = ({ product, price }) => {
  return (
    <tr>
      <td>{product}</td>
      <td>${price}</td>
    </tr>
  );
};

export default Red;
