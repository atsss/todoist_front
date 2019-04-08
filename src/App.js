import React, { Component, Fragment } from 'react';
import './App.sass';
import Header from './components/organisms/Header'
import Layout, { GridMain, GridSide } from './components/atoms/Layout'
import Txt, { SubTxt, WhiteTxt, WarningTxt } from './components/atoms/Txt'
import Heading from './components/atoms/Heading'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Layout>
          <GridMain>
            <Heading>heading</Heading>
            <Txt>default</Txt>
            <SubTxt size='s'>sub</SubTxt>
            <WarningTxt weight='bold' className='u-mt30'>sub</WarningTxt>
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
