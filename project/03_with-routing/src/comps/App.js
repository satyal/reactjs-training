import React from "react";

import { Routes, Route } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import Login from "./auth/Login";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Dashboard from "./protected/Dashboard";
import EmployeeList from "./protected/employees/EmployeeList";
import DepartmentList from "./protected/departments/DepartmentList";
import SignUp from "./auth/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index={true} element={<Login />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/departments" element={<DepartmentList />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
