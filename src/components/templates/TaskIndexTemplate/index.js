import React from 'react'
import TaskLists from '../../organisms/TaskLists'

const TaskIndexTemplate = ({ tasks, className }) => (
  <div className={className}>
    <TaskLists tasks={tasks}/>
  </div>
)

export default TaskIndexTemplate
