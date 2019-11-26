import React from "react";
import Error from "../../atoms/Error";
import TaskIndexTemplate from "../../templates/TaskIndexTemplate";
import { useQuery } from "@apollo/react-hooks";
import { GET_TASKS } from "../../../graphqls/queries";

const TaskIndexPage = () => {
  const { loading, error, data } = useQuery(GET_TASKS);

  if (loading) return <p>Loading ...</p>;
  if (error) return <Error error={error} />;

  const { tasks } = data;

  return <TaskIndexTemplate tasks={tasks} />;
};

export default TaskIndexPage;
