import React from 'react'
import styles from './styles.module.sass'
import Txt from '../../atoms/Txt'
import Check from '../../atoms/Check'
import Settings from '../../molecules/Settings'

const TaskList = ({ time, name, className }) => (
  <li className={ [ styles.root, className ].join(' ') }>
    <Check />
    <Txt weight='bold' className='u-ml15'>{ time }</Txt>
    <Txt className='u-ml5'>{ name }</Txt>
    <Settings className={styles.settings}/>
  </li>
)

export default TaskList
