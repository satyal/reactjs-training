import React from "react";

import MoonLoader from "react-spinners/MoonLoader";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";

// import AboutUs from "./AboutUs";
// import ContactUs from "./ContactUs";

const AboutUs = React.lazy(() => import("./AboutUs"));
const ContactUs = React.lazy(() => import("./ContactUs"));

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>

      <React.Suspense
        fallback={
          <MoonLoader
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
            color="blue"
          />
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </React.Suspense>
    </div>
  );
};

export default App;
