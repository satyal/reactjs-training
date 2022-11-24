import React from "react";

import { useRoutes } from "react-router-dom";

import routeConfig from "./config/routeConfig";

const App = () => {
  const jsxElements = useRoutes(routeConfig);

  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/employees/:empid" element={<Employees />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes> */}

      {jsxElements}
    </div>
  );
};

export default App;
