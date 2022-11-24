import React from "react";

import { useNavigate } from "react-router-dom";

import Nav from "./nav/Nav";

const Header = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <header>
      <div className="logo-container" style={{ fontWeight: "bold" }}>
        <span style={{ cursor: "pointer", width: 90 }} onClick={goHome}>
          Fiction Co.
        </span>
      </div>

      <div className="menu-container">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
