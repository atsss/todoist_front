import React, { useState } from "react";
import styles from "./styles.module.sass";
import Check from "../../atoms/Check";
import Txt from "../../atoms/Txt";
import ScoreOptions from "../../molecules/ScoreOptions";
import { useMutation } from "@apollo/react-hooks";
import { GET_TASKS } from "../../../graphqls/queries";
import { CREATE_RESULT_MUTATION } from "../../../graphqls/mutations";
import { timeFormat } from "../../utils/TimeFormat";
import { containerPresenter } from "../../utils/HoC.js";

const TaskListPresenter = ({
  id,
  hour,
  minute,
  name,
  score,
  createResult,
  setScore,
  className
}) => (
  <li className={[styles.root, className].join(" ")}>
    <div onClick={createResult}>
      {" "}
      <Check />{" "}
    </div>
    <Txt weight="bold" className="u-ml15">
      {timeFormat({ hour, minute })}
    </Txt>
    <Txt className="u-ml5">{name}</Txt>
    <ScoreOptions value={score} setScore={setScore} />
  </li>
);

const TaskListContainer = ({ presenter, id, ...props }) => {
  const [score, setScore] = useState(8);

  const [createResult, { _data }] = useMutation(CREATE_RESULT_MUTATION, {
    update: (store, { data: { createResult } }) => {
      const doneTask = createResult.task;
      const data = store.readQuery({ query: GET_TASKS });

      const newTasks = data.tasks.filter(task => task.id !== doneTask.id);

      store.writeQuery({ query: GET_TASKS, data: { tasks: newTasks } });
    },
    variables: { taskId: id, score }
  });

  return presenter({ id, score, createResult, setScore, ...props });
};

const TaskList = containerPresenter(TaskListContainer, TaskListPresenter);

export default TaskList;
