import React from "react";

import { Outlet } from "react-router-dom";

import Nav from "./Nav";

const AppLayout = () => {
  return (
    <>
      <Nav />

      <hr />

      <Outlet />

      <div>Footer</div>
    </>
  );
};

export default AppLayout;
