import React from "react";
import styles from "./styles.module.sass";
import Check from "../../atoms/Check";
import Txt from "../../atoms/Txt";
import Settings from "../../molecules/Settings";
import { useMutation } from "@apollo/react-hooks";
import { GET_TASKS } from "../../../graphqls/queries";
import { DONE_TASK_MUTATION } from "../../../graphqls/mutations";
import { timeFormat } from "../../utils/TimeFormat";
import { containerPresenter } from "../../utils/HoC.js";

const TaskListPresenter = ({ id, time, name, doneTask, className }) => (
  <li className={[styles.root, className].join(" ")}>
    <div onClick={doneTask}>
      {" "}
      <Check />{" "}
    </div>
    <Txt weight="bold" className="u-ml15">
      {timeFormat(time)}
    </Txt>
    <Txt className="u-ml5">{name}</Txt>
    <Settings id={id} className={styles.settings} />
  </li>
);

const TaskListContainer = ({ presenter, id, ...props }) => {
  const [doneTask, { _data }] = useMutation(DONE_TASK_MUTATION, {
    update: (store, { data: { doneTask } }) => {
      const data = store.readQuery({ query: GET_TASKS });

      const newTasks = data.tasks.filter(task => task.id !== doneTask.id);

      store.writeQuery({ query: GET_TASKS, data: { tasks: newTasks } });
    },
    variables: { id }
  });

  return presenter({ id, doneTask, ...props });
};

const TaskList = containerPresenter(TaskListContainer, TaskListPresenter);

export default TaskList;
