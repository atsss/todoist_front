import React from "react";
import Error from "../atoms/Error";
import TaskEditTemplate from "../templates/TaskEditTemplate";
import { useQuery } from "@apollo/react-hooks";
import { GET_TASK } from "../../graphqls/queries";

const TaskEditPage = ({ match }) => {
  const { loading, error, data } = useQuery(GET_TASK, {
    variables: { id: match.params.id }
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return <Error error={error} />;

  const { task } = data;

  return <TaskEditTemplate task={task} />;
};

export default TaskEditPage;
