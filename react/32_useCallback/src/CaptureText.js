import React, { memo } from "react";

const CaptureText = ({ text, textChanged }) => {
  console.log("Child component was rendered...");

  return (
    <>
      <form>
        <input type="text" onChange={textChanged} />
      </form>
      <h1>{text}</h1>
    </>
  );
};

export default memo(CaptureText);
