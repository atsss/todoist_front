import React, { useState } from "react";
import styles from "./styles.module.sass";
import Txt from "../../atoms/Txt";
import Badge from "../../atoms/Badge";
import Button from "../../atoms/Button";
import ScoreOptions from "../../molecules/ScoreOptions";
import { useMutation } from "@apollo/react-hooks";
import { GET_TASKS } from "../../../graphqls/queries";
import { CREATE_RESULT_MUTATION } from "../../../graphqls/mutations";
import { timeFormat } from "../../utils/TimeFormat";
import { containerPresenter } from "../../utils/HoC.js";

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

const TaskListPresenter = ({
  id,
  hour,
  minute,
  name,
  tags,
  score,
  createResult,
  setScore,
  className
}) => (
  <li className={[styles.root, className].join(" ")}>
    <div className={styles.block}>
      <Txt weight="bold">{timeFormat({ hour, minute })}</Txt>
      <Txt className="u-ml5">{name}</Txt>
      {tags.map((tag, i) => (
        <Badge key={i} className="u-ml10">
          {tag.name}
        </Badge>
      ))}
    </div>
    <div className={styles.block}>
      <ScoreOptions value={score} setScore={setScore} />
      <Button text="done!" onClick={createResult} className="u-ml10" />
    </div>
  </li>
);

const TaskList = containerPresenter(TaskListContainer, TaskListPresenter);

export default TaskList;
