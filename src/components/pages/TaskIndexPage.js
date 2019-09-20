import React, { Component } from "react";
import TaskIndexTemplate from "../templates/TaskIndexTemplate";
import { Query } from "react-apollo";
import { TASKS_QUERY } from "../../queries";

export default class TaskIndexPage extends Component {
  render() {
    return (
      <Query query={TASKS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const { tasks } = data;

          return <TaskIndexTemplate tasks={tasks} />;
        }}
      </Query>
    );
  }
}
