import React from "react";

import NavItem from "./NavItem";

const Nav = () => {
  return (
    <ul className="menu">
      <NavItem label="About Us" url="about-us.html" />

      <NavItem label="Contact Us" url="contact-us.html" />
    </ul>
  );
};

export default Nav;
