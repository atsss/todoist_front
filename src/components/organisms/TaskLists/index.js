import React from 'react'
// import styles from './styles.module.sass'
import PageTitle from '../../molecules/PageTitle'
import TaskList from '../../molecules/TaskList'

const TaskLists = ({ tasks, ...props }) => (
  <div>
    <PageTitle title='今日' sub='水 4月10日' />
    <ul>
      {tasks.map(task => (
        <TaskList
          key={task.id}
          id={task.id}
          time={task.time}
          name={task.name}
        />
      ))}
    </ul>
  </div>
)

export default TaskLists
