import React from "react";
import TaskEditTemplate from "../templates/TaskEditTemplate";
import { Query } from "react-apollo";
import { GET_TASK } from "../../graphqls/queries";

const TaskEditPage = ({ match }) => {
  return (
    <Query query={GET_TASK} variables={{ id: match.params.id }}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>;
        if (error) return <div>Error</div>;

        const { task } = data;

        return <TaskEditTemplate task={task} />;
      }}
    </Query>
  );
};

export default TaskEditPage;
