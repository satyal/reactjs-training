import React from "react";

import NavItem from "./NavItem";

const Nav = () => {
  //TODO: Toggle isUserLoggedIn value based on login status
  const isUserLoggedIn = false;

  return (
    <ul className="menu">
      {navConfig
        .filter((element) => element.protected === isUserLoggedIn)
        .map((element) => (
          <NavItem key={element.id} label={element.label} url={element.url} />
        ))}
    </ul>
  );
};

export default Nav;

const navConfig = [
  { id: 100, label: "About Us", url: "about-us", protected: false },
  { id: 200, label: "Contact Us", url: "contact-us", protected: false },
  { id: 300, label: "Employees", url: "Employees", protected: true },
  { id: 400, label: "Departments", url: "Departments", protected: true },
  { id: 500, label: "Logout", url: "", protected: true },
];

//TODO: Logout URL is temporarily set to empty. Fix it
