import React from "react";
import { SessionContainer } from "../../../containers";

const Error = ({ error }) => {
  const session = SessionContainer.useContainer();
  const { networkError } = error;

  if (networkError.statusCode === 401) session.logout();

  return <div>Error</div>;
};

export default Error;
