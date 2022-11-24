import React from "react";

import { useSearchParams } from "react-router-dom";

const ContactUs = () => {
  const [searchParams] = useSearchParams();

  const locationValue = searchParams.get("location");

  console.log("locationKey: ", locationValue);

  return (
    <h1>
      ContactUs - {locationValue ? locationValue : "something went wrong"}
    </h1>
  );
};

export default ContactUs;
