import React from "react";
import { useNavigate } from "react-router-dom";

import NavItem from "./NavItem";

import { useAuthContext } from "../../../contexts/authContext";

const Nav = () => {
  const navigate = useNavigate();

  const { isUserLoggedIn, logout } = useAuthContext();

  const logoutHandler = (e) => {
    logout();

    navigate("/");
  };

  return (
    <ul className="menu">
      {navConfig
        .filter((element) => element.protected === isUserLoggedIn)
        .map((element) => (
          <NavItem key={element.id} label={element.label} url={element.url} />
        ))}

      {isUserLoggedIn && (
        <NavItem label="Logout" url="/" clickHandler={logoutHandler} />
      )}
    </ul>
  );
};

export default Nav;

const navConfig = [
  { id: 100, label: "About Us", url: "about-us", protected: false },
  { id: 200, label: "Contact Us", url: "contact-us", protected: false },
  { id: 300, label: "Employees", url: "Employees", protected: true },
  { id: 400, label: "Departments", url: "Departments", protected: true },
];
