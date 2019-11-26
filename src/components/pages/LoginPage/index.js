import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { SessionContainer } from "../../../containers";
import LoginTemplate from "../../templates/LoginTemplate";

const LoginPage = () => {
  const session = SessionContainer.useContainer();
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  if (session.isLogin) history.replace(from);

  return <LoginTemplate />;
};

export default LoginPage;
