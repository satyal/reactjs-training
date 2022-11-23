import React from "react";

import useEmployeeListData from "./hooks/useEmployeeListData";

const App = () => {
  // Custom hook usage
  const apiData = useEmployeeListData();

  if (apiData?.loading) {
    return <h3 style={{ color: "blue" }}>Loading... Please wait</h3>;
  }

  if (apiData?.error !== "") {
    return <h3 style={{ color: "red" }}>API Call Error: {apiData?.error}</h3>;
  }

  return (
    <div>
      {apiData?.data.map((element) => {
        return (
          <div key={element?.id} style={{ color: "green" }}>
            {element?.first_name} {element?.last_name} :{" "}
            <span style={{ color: "maroon" }}>{element?.email}</span>
          </div>
        );
      })}
    </div>
  );
};

export default App;
