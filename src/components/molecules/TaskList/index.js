import React from 'react'
import styles from './styles.module.sass'
import Check from '../../atoms/Check'
import Link from '../../atoms/Link'
import Txt from '../../atoms/Txt'
import Settings from '../../molecules/Settings'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const DONE_TASK_MUTATION = gql`
  mutation DoneTaskMutation($id: ID!) {
    doneTask(id: $id) {
      id
      name
      dueDate
    }
  }
`

const TaskList = ({ id, time, name, className }) => (
  <li className={ [ styles.root, className ].join(' ') }>
    <Mutation
      mutation={DONE_TASK_MUTATION}
      variables={{ id }}
    >
      {doneTaskMutation => <div onClick={doneTaskMutation}> <Check /> </div> }
    </Mutation>
    <Txt weight='bold' className='u-ml15'>{ time }</Txt>
    <Txt className='u-ml5'>{ name }</Txt>
    <Link to={`/tasks/${id}/edit`}>
      <Settings className={styles.settings}/>
    </Link>
  </li>
)

export default TaskList
