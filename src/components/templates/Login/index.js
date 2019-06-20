import React, { Component } from 'react'
import styles from '../../atoms/Input/styles.module.sass'
import Button from '../../atoms/Button'
import { SessionContainer } from '../../../containers/'
import { Mutation } from 'react-apollo'
import { LOGIN_MUTATION } from '../../../queries'

class LoginTemplate extends Component {
  state = {
    email: 'lazy@example.com',
    password: 'passpass',
  }

  render() {
    const { email, password } = this.state
    return (
      <Mutation
        mutation={ LOGIN_MUTATION }
        variables={{ email, password }}
        onCompleted={ (data) => {
          if(data.signinUser == null) { return }

          document.cookie = `token=${data.signinUser.token}`
        }}
      >
        { loginMutation => <Button text='ログイン' onClick={ loginMutation } /> }
      </Mutation>
    )
  }
}

export default LoginTemplate
