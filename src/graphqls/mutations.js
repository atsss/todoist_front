import gql from "graphql-tag";

export const CREATE_RESULT_MUTATION = gql`
  mutation CreateResultMutation($taskId: ID!, $score: Int!) {
    createResult(taskId: $taskId, score: $score) {
      id
      score
      task {
        id
        name
      }
    }
  }
`;
