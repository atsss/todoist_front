import React from "react";
// import styles from './styles.module.sass'
import PageTitle from "../../molecules/PageTitle";
import TaskList from "../../molecules/TaskList";
import { today } from "../../utils/TimeFormat";

const TaskLists = ({ tasks, ...props }) => (
  <div>
    <PageTitle title="今日" sub={today} />
    <ul>
      {tasks.map(task => (
        <TaskList
          key={task.id}
          id={task.id}
          hour={task.schedule.hour}
          minute={task.schedule.minute}
          name={task.name}
          tags={task.tags}
        />
      ))}
    </ul>
  </div>
);

export default TaskLists;
