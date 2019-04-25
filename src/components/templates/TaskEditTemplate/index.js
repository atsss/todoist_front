import React from 'react'
import styles from '../../atoms/Input/styles.module.sass'
import Button from '../../atoms/Button'
import PageTitle from '../../molecules/PageTitle'

const TaskEditTemplate = ({ task, className }) => (
  <div className={className}>
    <PageTitle title='編集' />
    <input
      value={task.id}
      type='hidden'
    />
    <input
      className={styles.input}
      type='text'
      defaultValue={task.name}
      placeholder='新しいタスク'
    />
    <input
      className={styles.input}
      type='text'
      placeholder='日付'
    />
    <input
      className={styles.input}
      type='text'
      defaultValue={task.time}
      placeholder='時間'
    />
    <Button
      text='変更'
      onClick={(b) => console.log(b)}
    />
  </div>
)

export default TaskEditTemplate
