import React, { Component } from "react";
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

export default class TaskEditPage extends Component {
  render() {
    const { params } = this.props.match;

    return (
      <Query query={TASK_QUERY} variables={{ id: params.id }}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const { task } = data;

          return <TaskEditTemplate task={task} />;
        }}
      </Query>
    );
  }
}
