import React, { Component } from 'react'
import TaskIndexTemplate from '../templates/TaskIndexTemplate'

export default class TaskIndexPage extends Component {
  state = {
    tasks: [
      { id: 1, time: '10:30', name: 'ランニング' },
      { id: 2, time: '12:00', name: 'ランチ' }
    ]
  }

  render() {
    const { tasks } = this.state
    return (
      <TaskIndexTemplate tasks={tasks} />
    )
  }
}
