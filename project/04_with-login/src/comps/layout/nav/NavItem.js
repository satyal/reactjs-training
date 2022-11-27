import React from "react";

import { NavLink } from "react-router-dom";

const NavItem = ({ label, url, clickHandler }) => {
  if (clickHandler) {
    return (
      <li className="menu-item">
        <span
          style={{ color: "lightyellow", cursor: "pointer" }}
          onClick={clickHandler}
        >
          {label}
        </span>
      </li>
    );
  }

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
