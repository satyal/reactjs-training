import React from "react";

import { Routes, Route } from "react-router-dom";

import Nav from "./layout/Nav";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import PageNotFound from "./PageNotFound";
import Employees from "./Employees";

import AppLayout from "./layout/AppLayout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/employees/:empid" element={<Employees />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
