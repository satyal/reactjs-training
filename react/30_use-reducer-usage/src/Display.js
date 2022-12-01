import React from "react";

const Display = ({ count }) => {
  return <h1>{count}</h1>;
};

export default Display;

Display.defaultProps = {
  count: 0,
};
