import React from 'react'
import styles from './styles.module.sass'
import Txt from '../../atoms/Txt'

const TaskList = ({ time, name, className }) => (
  <li className={ [ styles.root, className ].join(' ') }>
    <Txt weight='bold'>{ time }</Txt>
    <Txt className='u-ml5'>{ name }</Txt>
  </li>
)

export default TaskList
