import React from 'react'
import styles from '../../atoms/Input/styles.module.sass'
import Button from '../../atoms/Button'
import { SessionContainer } from '../../../containers/'

const LoginTemplate = ({ className }) => (
  <Button text='ログイン' onClick={ SessionContainer.useContainer().login } />
)

export default LoginTemplate
