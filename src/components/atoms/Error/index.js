import React from "react";
import PropTypes from "prop-types";
import { SessionContainer } from "../../../containers";

const Error = ({ error }) => {
  const logout = SessionContainer.useContainer().logout;
  const {
    networkError: { statusCode }
  } = error;

  if (statusCode === 401) logout();

  return <div>Error</div>;
};

export default Error;

Error.propTypes = {
  error: PropTypes.object.isRequired
};
