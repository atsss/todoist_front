import React from 'react'
import styles from '../../atoms/Input/styles.module.sass'
import Button from '../../atoms/Button'
import PageTitle from '../../molecules/PageTitle'

const TaskNewTemplate = ({ className }) => (
  <div className={className}>
    <PageTitle title='新規作成' />
    <input
      className={styles.input}
      type='text'
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
      placeholder='時間'
    />
    <Button
      text='追加'
      onClick={(b) => console.log(b)}
    />
  </div>
)

export default TaskNewTemplate
