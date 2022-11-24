const env = process.env.REACT_APP_ENV;

const config = {
  apiURL:
    env === "local"
      ? process.env.REACT_APP_API_URL
      : process.env.CICD_ENVIRONMENT_API_URL,
};

export default config;
