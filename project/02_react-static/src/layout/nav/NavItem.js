import React from "react";

const NavItem = ({ label, url }) => {
  return (
    <li className="menu-item">
      <a href={url}>{label}</a>
    </li>
  );
};

export default NavItem;
