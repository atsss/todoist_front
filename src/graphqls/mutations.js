import gql from "graphql-tag";

export const DONE_TASK_MUTATION = gql`
  mutation DoneTaskMutation($id: ID!) {
    doneTask(id: $id) {
      id
      name
      dueDate
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
    }
  }
`;
