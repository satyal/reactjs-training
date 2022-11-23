import React from "react";

const Controlled = () => {
  const [value, setValue] = React.useState("defaultvalue");

  const textChanged = (e) => {
    setValue(e.target.value);
  };

  const register = (e) => {
    e.preventDefault();

    console.log("Submit Values", { fullName: value });
  };

  return (
    <div>
      <h3>Controlled</h3>
      <form>
        <div>Full Name</div>
        <div>
          <input type="text" value={value} onChange={textChanged} />
        </div>

        <div>&nbsp;</div>

        <div>
          <input type="submit" value="Register" onClick={register} />
        </div>
      </form>
    </div>
  );
};

export default Controlled;
