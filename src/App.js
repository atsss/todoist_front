import React, { Fragment } from 'react'
import { Switch, Route} from 'react-router-dom'
import './App.sass'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

// components
import Layout, { GridMain, GridSide } from './components/atoms/Layout'
import Header from './components/organisms/Header'
import Menu from './components/organisms/Menu'
import TaskIndexPage from './components/pages/TaskIndexPage'
import TaskNewPage from './components/pages/TaskNewPage'
import TaskEditPage from './components/pages/TaskEditPage'

library.add(faStroopwafel)

const App = () => (
  <Fragment>
    <Header />
    <Layout>
      <GridMain>
        <Switch>
          <Route exact path='/' component={TaskIndexPage} />
          <Route exact path='/tasks/new' component={TaskNewPage} />
          <Route exact path='/tasks/:id/edit' component={TaskEditPage} />
        </Switch>
      </GridMain>
      <GridSide>
        <Menu />
      </GridSide>
    </Layout>
  </Fragment>
)

export default App
