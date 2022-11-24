import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import config from "../../configs/config";

import "./SignUp.css";

const INITIAL_DATA = {
  name: "",
  username: "",
  password: "",
};

const SignUp = () => {
  const [formData, setFormData] = React.useState(INITIAL_DATA);

  const navigate = useNavigate();

  const dataChanged = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  const register = async () => {
    try {
      await axios.post(`${config.apiURL}/users`, { ...formData });

      navigate("/");
    } catch (error) {
      console.log("API Error: ", error);
    }
  };

  const reset = () => {
    setFormData({ ...INITIAL_DATA });
  };

  return (
    <div>
      <div>Name</div>
      <div>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={dataChanged}
        />
      </div>

      <div>Username</div>
      <div>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={dataChanged}
        />
      </div>

      <div>Password</div>
      <div>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={dataChanged}
        />
      </div>

      <div>
        <input type="button" value="Register" onClick={register} />
        <input type="button" value="Reset" onClick={reset} />
      </div>
    </div>
  );
};

export default SignUp;
