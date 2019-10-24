import React, { Fragment, useEffect } from "react";

// utility stayles
import "./App.sass";

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

// routing
import Routes from "./config/routes";

// components
import Layout, { GridMain, GridSide } from "./components/atoms/Layout";
import Header from "./components/organisms/Header";
import Menu from "./components/organisms/Menu";
import LoginPage from "./components/pages/LoginPage";
import { SessionContainer } from "./containers";

library.add(faStroopwafel);

const App = () => {
  const session = SessionContainer.useContainer();

  useEffect(() => session.checkLogin(), []);

  if (!session.isChecked) {
    return <p>Loading</p>;
  }

  return session.isLogin ? (
    <Fragment>
      <Header />
      <Layout>
        <GridMain>
          <Routes />
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
