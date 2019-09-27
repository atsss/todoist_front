import gql from "graphql-tag";

export const GET_TASKS = gql`
  {
    tasks {
      id
      name
      dueDate
    }
  }
`;

export const GET_TASK = gql`
  query Task($id: ID!) {
    task(id: $id) {
      name
      dueDate
    }
  }
`;
