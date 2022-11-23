import React from "react";

const Controlled = () => {
  const [formData, setFormData] = React.useState({
    text: "default text",
    select: "2",
    radio: "F",
    check: {
      hyderabad: false,
      bangalore: false,
    },
    textarea: "some default text",
  });

  const textChanged = (e) => {
    const value = e.target.value;

    setFormData((prevState) => {
      return { ...prevState, text: value };
    });
  };

  const selectChanged = (e) => {
    const value = e.target.value;

    setFormData((prevState) => {
      return { ...prevState, select: value };
    });
  };

  const textAreaChanged = (e) => {
    const value = e.target.value;

    setFormData((prevState) => {
      return { ...prevState, textarea: value };
    });
  };

  const checkChanged = (e, city) => {
    const checked = e.target.checked;

    setFormData((prevState) => {
      return { ...prevState, check: { ...prevState.check, [city]: checked } };
    });
  };

  const radioChanged = (value) => {
    setFormData((prevState) => {
      return { ...prevState, radio: value };
    });
  };

  const submitForm = () => {
    console.log("Form data: ", formData);
  };

  return (
    <div>
      <div>
        <input type="text" value={formData.text} onChange={textChanged} />
        <br /> <br />
      </div>

      <div>
        <select value={formData.select} onChange={selectChanged}>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <br /> <br />
      </div>

      <div>
        <input
          type="radio"
          checked={formData.radio === "M" ? true : false}
          onChange={() => {
            radioChanged("M");
          }}
        />
        Male &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="radio"
          checked={formData.radio === "F" ? true : false}
          onChange={() => {
            radioChanged("F");
          }}
        />
        Female
        <br /> <br />
      </div>

      <div>
        <input
          type="checkbox"
          checked={formData.check.hyderabad}
          onChange={(e) => {
            checkChanged(e, "hyderabad");
          }}
        />
        Hyderabad&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="checkbox"
          checked={formData.check.bangalore}
          onChange={(e) => {
            checkChanged(e, "bangalore");
          }}
        />
        Bangalore
        <br /> <br />
      </div>

      <div>
        <textarea
          value={formData.textarea}
          onChange={textAreaChanged}
        ></textarea>
        <br /> <br />
      </div>

      <div>
        <button onClick={submitForm}>Submit Form</button>
        <br /> <br />
      </div>
    </div>
  );
};

export default Controlled;
