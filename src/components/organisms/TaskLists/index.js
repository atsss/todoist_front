import React from 'react'
import styles from './styles.module.sass'
import Txt from '../../atoms/Txt'
import PageTitle from '../../molecules/PageTitle'

const TaskLists = props => (
  <div>
    <PageTitle title='今日' sub='水 4月10日' />
    <Txt>default</Txt>
  </div>
)

export default TaskLists
