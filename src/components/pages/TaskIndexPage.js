import React from "react";
import TaskIndexTemplate from "../templates/TaskIndexTemplate";
import { useQuery } from "@apollo/react-hooks";
import { TASKS_QUERY } from "../../queries";

const TaskIndexPage = () => {
  const { loading, error, data } = useQuery(TASKS_QUERY);

  if (loading) return <p>Loading ...</p>;
  if (error) return <div>Error</div>;

  const { tasks } = data;

  return <TaskIndexTemplate tasks={tasks} />;
};

export default TaskIndexPage;
