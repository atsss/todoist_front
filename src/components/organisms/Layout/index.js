import React, { Fragment } from "react";
import BaseLayout, { GridMain, GridSide } from "../../atoms/Layout";
import Header from "../Header";
import Menu from "../Menu";

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <BaseLayout>
      <GridMain>{children}</GridMain>
      <GridSide>
        <Menu />
      </GridSide>
    </BaseLayout>
  </Fragment>
);

export default Layout;
