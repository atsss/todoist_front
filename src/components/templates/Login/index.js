import React, { useState } from 'react'
import styles from '../../atoms/Input/styles.module.sass'
import Button from '../../atoms/Button'
import { SessionContainer } from '../../../containers/'
import { Mutation } from 'react-apollo'
import { LOGIN_MUTATION } from '../../../queries'

const LoginTemplate = ({ className }) => {
  const [email, setEmail] = useState('lazy@example.com')
  const [password, setPassword] = useState('passpass')
  let session = SessionContainer.useContainer()

  return (
    <Mutation
      mutation={ LOGIN_MUTATION }
      variables={{ email, password }}
      onCompleted={ (data) => {
        if(data.signinUser == null) { return }

        document.cookie = `token=${data.signinUser.token}`
        session.login()
      }}
    >
      { loginMutation => <Button text='ログイン' onClick={ loginMutation } /> }
    </Mutation>
  )
}

export default LoginTemplate
