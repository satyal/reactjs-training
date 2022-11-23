import React from "react";

const Uncontrolled = () => {
  const textRef = React.useRef();

  const submitForm = (e) => {
    e.preventDefault();

    console.log("Submit Values", { fullName: textRef.current.value });

    textRef.current.focus();
  };

  return (
    <div>
      <h3>Uncontrolled</h3>
      <form>
        <div>Full Name</div>
        <div>
          <input type="text" ref={textRef} defaultValue="defaultvalue" />
        </div>

        <div>&nbsp;</div>

        <div>
          <input type="submit" value="Register" onClick={submitForm} />
        </div>
      </form>
    </div>
  );
};

export default Uncontrolled;
