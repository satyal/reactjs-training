import React from "react";
import axios from "axios";

const INITIAL_STATE = { loading: false, data: [], error: "" };

const URL = "https://run.mocky.io/v3/f69eb611-bf81-4fd4-b628-fe7002016911";

export default function useEmployeeListData() {
  const [apiData, setApiData] = React.useState(INITIAL_STATE);

  React.useEffect(() => {
    // Executes on mounting of the App component. i.e., only once
    getAPIData();
  }, []);

  const getAPIData = async () => {
    setApiData({ ...INITIAL_STATE, loading: true });

    try {
      const response = await axios.get(URL);

      setApiData((prevState) => {
        return { ...prevState, data: response?.data, loading: false };
      });
    } catch (error) {
      setApiData((prevState) => {
        return { ...prevState, error: error?.message, loading: false };
      });

      console.log(error);
    }
  };

  return apiData;
}
