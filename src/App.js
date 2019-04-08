import React, { Component, Fragment } from 'react'
import './App.sass'
import Layout, { GridMain, GridSide } from './components/atoms/Layout'
import Txt from './components/atoms/Txt'
import Header from './components/organisms/Header'
import TaskLists from './components/organisms/TaskLists'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Layout>
          <GridMain>
            <TaskLists />
          </GridMain>
          <GridSide>
            <Txt weight='bold'>今日</Txt>
          </GridSide>
        </Layout>
      </Fragment>
    );
  }
}

export default App;
