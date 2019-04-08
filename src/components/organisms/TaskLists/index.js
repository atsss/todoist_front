import React, { Component } from 'react'
import styles from './styles.module.sass'
import Heading from '../../atoms/Heading'
import Txt, { SubTxt } from '../../atoms/Txt'

const TaskLists = props => (
  <div>
    <Heading>今日</Heading>
    <Txt>default</Txt>
    <SubTxt size='s'>sub</SubTxt>
  </div>
)

export default TaskLists
