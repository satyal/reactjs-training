import React, { memo } from "react";

const CaptureText = ({ text }) => {
  console.log("Child component was rendered...");

  return <h1>{text}</h1>;
};

export default memo(CaptureText);

//Memoization --> caching of something
//React.memo --> caching of the function (i.e., component)
