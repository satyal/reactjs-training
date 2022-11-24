import React from "react";

import { Routes, Route } from "react-router-dom";

import Nav from "./layout/Nav";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import PageNotFound from "./PageNotFound";
import Employees from "./Employees";

const App = () => {
  return (
    <div>
      <Nav />

      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/employees/:empid" element={<Employees />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
