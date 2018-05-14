import React, { Component } from 'react'
import emailValidator from 'email-validator'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class UserLoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loginButtonDisabled: true,
      emailValidationError: null,
      passwordValidationError: null,
      password: null,
      email: null
    }
  }

  validate = () => {
    this.setState({
      loginButtonDisabled: !(this.emailIsValid() &
                this.passwordIsValid())
    })
  }

  emailIsValid = () => {
    const valid = emailValidator.validate(this.state.email)
    if (valid) {
      this.setState({
        emailValidationError: null
      })
    } else {
      this.setState({
        emailValidationError: 'Wrong email'
      })
    }
    return valid
  }
  passwordIsValid = () => {
    const valid = this.state.password && this.state.password.length > 5
    if (valid) {
      this.setState({
        passwordValidationError: null
      })
    } else {
      if (this.state.password) {
        this.setState({
          passwordValidationError: 'Password must be at least 6 simbols'
        })
      } else {
        this.setState({
          passwordValidationError: 'Enter password'
        })
      }
    }
    return valid
  }

  handleChange = event => {
    const target = event.currentTarget
    this.setState(
      {
        [target.name]: target.value
      },
            () => {
              this.validate()
            }
        )
  }

  handleSubmit = event => {
    console.log('not implemented yet')
  }

  render () {
    return (
      <div style={main}>
        <h2>Login</h2>
        <TextField
          name='email'
          hintText='Email'
          floatingLabelText='Email'
          errorText={this.state.emailValidationError}
          onChange={this.handleChange}
                />
        <br />
        <TextField
          name='password'
          type='password'
          hintText='Password'
          errorText={this.state.passwordValidationError}
          floatingLabelText='Password'
          onChange={this.handleChange}
                />
        <br />
        <RaisedButton
          label='Login'
          primary
          disabled={this.state.loginButtonDisabled}
          onClick={this.handleSubmit}
                />
      </div>
    )
  }
}

const main = {
  border: '3px solid #169bad',
  padding: '20px 50px',
  width: '300px'
}

export default UserLoginForm
