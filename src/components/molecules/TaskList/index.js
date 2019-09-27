import React from "react";
import styles from "./styles.module.sass";
import Check from "../../atoms/Check";
import Txt from "../../atoms/Txt";
import Settings from "../../molecules/Settings";
import { Mutation } from "react-apollo";
import { GET_TASKS } from "../../../graphqls/queries";
import { DONE_TASK_MUTATION } from "../../../graphqls/mutations";
import { timeFormat } from "../../utils/TimeFormat";

const TaskList = ({ id, time, name, className }) => (
  <li className={[styles.root, className].join(" ")}>
    <Mutation
      mutation={DONE_TASK_MUTATION}
      variables={{ id }}
      update={(store, { data: { doneTask } }) => {
        const data = store.readQuery({ query: GET_TASKS });
        const tasks = data.tasks;

        for (var i = 0; i < tasks.length; i++) {
          if (tasks[i].id === doneTask.id) {
            tasks.splice(i, 1);
          }
        }

        store.writeQuery({ query: GET_TASKS, data });
      }}
    >
      {doneTaskMutation => (
        <div onClick={doneTaskMutation}>
          {" "}
          <Check />{" "}
        </div>
      )}
    </Mutation>
    <Txt weight="bold" className="u-ml15">
      {timeFormat(time)}
    </Txt>
    <Txt className="u-ml5">{name}</Txt>
    <Settings id={id} className={styles.settings} />
  </li>
);

export default TaskList;
