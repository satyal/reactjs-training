import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import config from "../../configs/config";

import "./Login.css";

const INITIAL_DATA = {
  username: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(INITIAL_DATA);
  const [formError, setFormError] = useState("");

  const dataChanged = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  const login = async () => {
    setFormError("");

    if (!formData.username) {
      setFormError("Username is required");

      return;
    }

    if (!formData.password) {
      setFormError("Password is required");

      return;
    }

    try {
      const response = await axios.get(`${config.apiURL}/users`);

      const userFound = response.data.some((user) =>
        user.username === formData.username &&
        user.password === formData.password
          ? true
          : false
      );

      if (userFound) {
        navigate("/dashboard");
      } else {
        setFormError("Invalid credentials!");
      }
    } catch (error) {
      setFormError(`API Error: ${error.message}`);
    }
  };

  const reset = () => {
    setFormData({ ...INITIAL_DATA });

    setFormError("");
  };

  return (
    <div className="login-form-container">
      <div className="login-form">
        <div className="form-field">
          <div className="ff-label">
            <label htmlFor="username">Username*</label>
          </div>
          <div className="ff-content">
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={dataChanged}
            />
          </div>
        </div>

        <div className="form-field">
          <div className="ff-label">
            <label htmlFor="password">Password*</label>
          </div>
          <div className="ff-content">
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={dataChanged}
            />
          </div>
        </div>

        {formError !== "" && <div style={{ color: "red" }}>{formError}</div>}

        <div className="form-actions">
          <button type="submit" onClick={login}>
            Login
          </button>
          <button type="button" onClick={reset}>
            Reset
          </button>
        </div>

        <div>
          <Link to="/sign-up">Sign Up</Link> if you don't have an account.
        </div>
      </div>
    </div>
  );
};

export default Login;
