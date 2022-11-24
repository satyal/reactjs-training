import HomePage from "../HomePage";
import AboutUs from "../AboutUs";
import ContactUs from "../ContactUs";
import PageNotFound from "../PageNotFound";
import Employees from "../Employees";

import AppLayout from "../layout/AppLayout";

const routeConfig = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/employees/:empid", element: <Employees /> },
    ],
  },

  { path: "*", element: <PageNotFound /> },
];

export default routeConfig;
