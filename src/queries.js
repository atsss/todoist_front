import gql from 'graphql-tag'

export const DONE_TASK_MUTATION = gql`
  mutation DoneTaskMutation($id: ID!) {
    doneTask(id: $id) {
      id
      name
      dueDate
    }
  }
`

export const TASKS_QUERY = gql`
  {
    tasks {
      id
      name
      dueDate
    }
  }
`
