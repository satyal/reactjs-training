import React from "react";

import { Link, useNavigate } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  const forward = () => {
    navigate(1);
  };

  return (
    <nav>
      <div>
        <input
          type="button"
          value="Back"
          style={{ marginRight: 20 }}
          onClick={back}
        />
        <input type="button" value="Forward" onClick={forward} />
      </div>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/contact-us?location=hyderabad">Contact Us (Hyd)</Link>
        </li>
        <li>
          <Link to="/contact-us?location=bangalore">Contact Us (Blr)</Link>
        </li>
        <li>
          <Link to="/employees/1345">Sreekanth</Link>
        </li>
        <li>
          <Link to="/employees/1513">Another employee</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
