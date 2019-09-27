import React from "react";
import TaskEditTemplate from "../templates/TaskEditTemplate";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const TASK_QUERY = gql`
  query Task($id: ID!) {
    task(id: $id) {
      name
      dueDate
    }
  }
`;

const TaskEditPage = ({ match }) => {
  return (
    <Query query={TASK_QUERY} variables={{ id: match.params.id }}>
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
