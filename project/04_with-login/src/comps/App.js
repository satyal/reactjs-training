import React from "react";

import { Routes, Route } from "react-router-dom";

import { AuthContextProvider } from "../contexts/authContext";

import AppLayout from "./layout/AppLayout";
import Login from "./auth/Login";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Dashboard from "./protected/Dashboard";
import EmployeeList from "./protected/employees/EmployeeList";
import DepartmentList from "./protected/departments/DepartmentList";
import SignUp from "./auth/SignUp";

import CheckAuth from "./auth/CheckAuth";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index={true} element={<Login />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/dashboard"
            element={
              <CheckAuth>
                <Dashboard />
              </CheckAuth>
            }
          />
          <Route
            path="/employees"
            element={
              <CheckAuth>
                <EmployeeList />
              </CheckAuth>
            }
          />
          <Route
            path="/departments"
            element={
              <CheckAuth>
                <DepartmentList />
              </CheckAuth>
            }
          />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;

/**
  if (isUserLoggedIn) {
    return <Navigate to="/dashboard"></Navigate>;
  }
 */
