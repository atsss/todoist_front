import React, { Component, Fragment } from 'react'
import './App.sass'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

// components
import Layout, { GridMain, GridSide } from './components/atoms/Layout'
import Txt from './components/atoms/Txt'
import Header from './components/organisms/Header'
import TaskLists from './components/organisms/TaskLists'

library.add(faStroopwafel)

class App extends Component {
  state = {
    tasks: [
      { id: 1, time: '10:30', name: 'ランニング' },
      { id: 2, time: '12:00', name: 'ランチ' }
    ]
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Layout>
          <GridMain>
            <TaskLists tasks={this.state.tasks}/>
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
