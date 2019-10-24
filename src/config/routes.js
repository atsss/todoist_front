import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { SessionContainer } from "../containers";
import Layout from "../components/organisms/Layout";
import LoginPage from "../components/pages/LoginPage";
import TaskIndexPage from "../components/pages/TaskIndexPage";
import TaskNewPage from "../components/pages/TaskNewPage";
import TaskEditPage from "../components/pages/TaskEditPage";

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <Auth>
      <Route exact path="/" component={TaskIndexPage} />
      <Route exact path="/tasks/new" component={TaskNewPage} />
      <Route exact path="/tasks/:id/edit" component={TaskEditPage} />
    </Auth>
  </Switch>
);

export default Routes;

const Auth = ({ children }) => {
  const session = SessionContainer.useContainer();

  return (
    <Route
      render={({ location }) =>
        session.isLogin ? (
          <Layout>{children}</Layout>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
