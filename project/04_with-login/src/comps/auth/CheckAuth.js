import { Navigate } from "react-router-dom";

import { useAuthContext } from "../../contexts/authContext";

const CheckAuth = ({ children }) => {
  const { isUserLoggedIn } = useAuthContext();

  if (isUserLoggedIn) {
    return children;
  }

  return <Navigate to="/" />;
};

export default CheckAuth;
