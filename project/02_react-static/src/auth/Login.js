import React from "react";

import "./Login.css";

const Login = () => {
  const login = () => {
    //TODO:
  };

  return (
    <div className="login-form-container">
      <div className="login-form">
        <div className="form-field">
          <div className="ff-label">
            <label htmlFor="username">Username*</label>
          </div>
          <div className="ff-content">
            <input type="text" id="username" />
          </div>
        </div>

        <div className="form-field">
          <div className="ff-label">
            <label htmlFor="password">Password*</label>
          </div>
          <div className="ff-content">
            <input type="password" id="password" />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" onClick={login}>
            Login
          </button>
          <button type="button">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
