import React, { Component } from 'react'
import TaskEditTemplate from '../templates/TaskEditTemplate'

export default class TaskEditPage extends Component {
  state = {
    task: { id: 1, time: '10:30', name: 'ランニング' }
  }

  render() {
    const { task } = this.state
    return (
      <TaskEditTemplate task={task} />
    )
  }
}
