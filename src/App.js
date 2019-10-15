import React, { Fragment, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.sass";

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

// components
import Layout, { GridMain, GridSide } from "./components/atoms/Layout";
import Header from "./components/organisms/Header";
import Menu from "./components/organisms/Menu";
import LoginPage from "./components/pages/LoginPage";
import TaskIndexPage from "./components/pages/TaskIndexPage";
import TaskNewPage from "./components/pages/TaskNewPage";
import TaskEditPage from "./components/pages/TaskEditPage";
import { SessionContainer } from "./containers";

library.add(faStroopwafel);

const App = () => {
  const session = SessionContainer.useContainer();

  useEffect(() => session.checkLogin());

  if (!session.isChecked) {
    return <p>Loading</p>;
  }

  return session.isLogin ? (
    <Fragment>
      <Header />
      <Layout>
        <GridMain>
          <Switch>
            <Route exact path="/" component={TaskIndexPage} />
            <Route exact path="/tasks/new" component={TaskNewPage} />
            <Route exact path="/tasks/:id/edit" component={TaskEditPage} />
          </Switch>
        </GridMain>
        <GridSide>
          <Menu />
        </GridSide>
      </Layout>
    </Fragment>
  ) : (
    <LoginPage />
  );
};

export default App;
