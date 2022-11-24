import React from "react";

import { useParams } from "react-router-dom";

const Employees = () => {
  const params = useParams();

  console.log("Route params: ", params);

  return <div>Employee # {params?.empid}</div>;
};

export default Employees;
