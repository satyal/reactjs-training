import React, { useRef } from "react";

const Uncontrolled = () => {
  const textRef = useRef();
  const selectRef = useRef();
  const textAreaRef = useRef();

  const checkRef = useRef();
  const radioRef1 = useRef();

  const submitForm = () => {
    console.log("Form data: ", {
      text: textRef.current.value,
      select: selectRef.current.value,
      textArea: textAreaRef.current.value,
      check: checkRef.current.checked,
      radio: radioRef1.current.checked ? "Male" : "Female",
    });
  };

  return (
    <div>
      <div>
        <input type="text" ref={textRef} defaultValue="def value" />
        <br /> <br />
      </div>

      <div>
        <select ref={selectRef} defaultValue="2">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <br /> <br />
      </div>

      <div>
        <input type="radio" ref={radioRef1} defaultChecked={true} name="test" />
        Male &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" name="test" />
        Female
        <br /> <br />
      </div>

      <div>
        <input type="checkbox" ref={checkRef} defaultChecked={false} />
        Married
        <br /> <br />
      </div>

      <div>
        <textarea ref={textAreaRef} defaultValue="default text"></textarea>
        <br /> <br />
      </div>

      <div>
        <button onClick={submitForm}>Submit Form</button>
        <br /> <br />
      </div>
    </div>
  );
};

export default Uncontrolled;
