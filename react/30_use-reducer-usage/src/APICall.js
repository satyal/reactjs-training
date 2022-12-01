import React from "react";
import axios from "axios";

const URL = "https://run.mocky.io/v3/f69eb611-bf81-4fd4-b628-fe7002016911";

const INITIAL_STATE = { loading: false, data: [], error: "" };

const APICall = () => {
  // const [apiData, setApiData] = React.useState(INITIAL_STATE);

  const [apiData, dispatch] = React.useReducer(apiCallReducer, INITIAL_STATE);

  React.useEffect(() => {
    // Executes on mounting of the App component. i.e., only once
    getAPIData();
  }, []);

  const getAPIData = async () => {
    //setApiData({ ...INITIAL_STATE, loading: true });
    dispatch({ type: "API_CALLED" });

    try {
      const response = await axios.get(URL);

      //   setApiData((prevState) => {
      //     return { ...prevState, data: response?.data, loading: false };
      //   });
      dispatch({ type: "API_SUCCESS", data: response?.data });
    } catch (error) {
      //   setApiData((prevState) => {
      //     return { ...prevState, error: error?.message, loading: false };
      //   });
      dispatch({ type: "API_ERROR", error: error?.message });
    }
  };

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

export default APICall;

function apiCallReducer(prevState, action) {
  let newState;

  switch (action.type) {
    case "API_CALLED":
      newState = { ...INITIAL_STATE, loading: true };

      break;

    case "API_SUCCESS":
      newState = { ...prevState, data: action?.data, loading: false };
      break;

    case "API_ERROR":
      newState = { ...prevState, error: action?.error, loading: false };
      break;
    default:
      break;
  }

  return newState;
}
