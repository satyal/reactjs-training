import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const location = useLocation();

  console.log(location);

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div>
      <div style={{ color: "red" }}>
        The page <strong>{location.pathname}</strong> that you are looking for
        does not exist.
      </div>

      <div style={{ marginTop: 30 }}>
        <input type="button" value="Back to home page" onClick={goToHomePage} />
      </div>
    </div>
  );
};

export default PageNotFound;
