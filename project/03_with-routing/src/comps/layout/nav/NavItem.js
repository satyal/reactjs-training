import React from "react";

import { NavLink } from "react-router-dom";

const NavItem = ({ label, url }) => {
  return (
    <li className="menu-item">
      <NavLink
        to={url}
        style={({ isActive }) =>
          isActive
            ? { color: "pink", fontWeight: "bold" }
            : { color: "lightyellow" }
        }
      >
        {label}
      </NavLink>
    </li>
  );
};

export default NavItem;
