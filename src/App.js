import React, { Component, Fragment } from 'react';
import './App.sass';
import Header from './components/organisms/Header'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className='container'>
        </div>
      </Fragment>
    );
  }
}

export default App;
