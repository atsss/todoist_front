import React, { Component, Fragment } from 'react';
import './App.sass';
import Header from './components/organisms/Header'
import Layout, { GridMain, GridSide } from './components/atoms/Layout'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Layout>
          <GridMain>
            <p>main</p>
          </GridMain>
          <GridSide>
            <p>side</p>
          </GridSide>
        </Layout>
      </Fragment>
    );
  }
}

export default App;
