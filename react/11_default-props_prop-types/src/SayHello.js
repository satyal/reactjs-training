import React from "react";

import PropTypes from "prop-types";

function SayHello(props) {
  return (
    <div>
      {props.greeting} {props.name}
    </div>
  );
}

export default SayHello;

SayHello.defaultProps = {
  greeting: "Hi",
};

SayHello.propTypes = {
  name: PropTypes.string.isRequired,
};
