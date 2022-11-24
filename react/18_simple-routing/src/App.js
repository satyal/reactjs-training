import React from "react";

import { Routes, Route } from "react-router-dom";

import Nav from "./layout/Nav";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

const App = () => {
  return (
    <div>
      <Nav />

      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;
