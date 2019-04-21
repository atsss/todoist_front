import React from 'react'
import styles from './styles.module.sass'
import Check from '../../atoms/Check'
import Link from '../../atoms/Link'
import Txt from '../../atoms/Txt'
import Settings from '../../molecules/Settings'

const TaskList = ({ id, time, name, className }) => (
  <li className={ [ styles.root, className ].join(' ') }>
    <Check />
    <Txt weight='bold' className='u-ml15'>{ time }</Txt>
    <Txt className='u-ml5'>{ name }</Txt>
    <Link to={`/tasks/${id}/edit`}>
      <Settings className={styles.settings}/>
    </Link>
  </li>
)

export default TaskList
