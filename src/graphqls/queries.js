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
