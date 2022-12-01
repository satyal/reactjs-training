import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAPIData } from "./redux/apiSlice";

const App = () => {
  const dispatch = useDispatch();
  const api = useSelector((state) => state.api);

  React.useEffect(() => {
    dispatch(getAPIData());
  }, [dispatch]);

  if (api.fetching) {
    return <div style={{ color: "blue" }}>Fetching...Please wait...</div>;
  }

  if (api.error !== "") {
    return <div style={{ color: "red" }}>{api.error}</div>;
  }

  return (
    <div style={{ color: "green" }}>
      {api.data.map((e) => {
        return (
          <div key={e.id}>
            {e.first_name} {e.last_name}
          </div>
        );
      })}
    </div>
  );
};

export default App;
