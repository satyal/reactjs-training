import React from "react";

import Nav from "./nav/Nav";

const Header = () => {
  return (
    <header>
      <div
        className="logo-container" //style="font-weight: bolder"
      >
        Fiction Co.
      </div>

      <div className="menu-container">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
