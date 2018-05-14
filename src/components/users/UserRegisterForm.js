import React, { Component } from 'react'
import Axios from 'axios'
import { debounce } from 'throttle-debounce'
import emailValidator from 'email-validator'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar'

import { URL_USERS } from '../../constants/Constants'

class UserRegisterForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      registerButtonDisabled: true,
      snackAutoHideDuration: 2000,
      snackMessage: 'User registered',
      snackOpen: false,
      email: null,
      emailValidationError: null,
      password: null,
      passwordValidationError: null,
      passwordRepeat: null,
      passwordRepeatValidationError: null,
      firstName: null,
      firstNameValidationError: null,
      lastName: null,
      lastNameValidationError: null
    }
  }

  validate = () => {
    this.setState({
      registerButtonDisabled: !(this.emailIsValid() 
          & this.passwordIsValid() 
          & this.repeatPasswordIsValid() 
          & this.firstNameIsValid() 
          & this.lastNameIsValid())
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
      this.setState({
        passwordValidationError: 'Wrong password'
      })
    }
    return valid
  }
  repeatPasswordIsValid = () => {
    const valid = this.state.password === this.state.passwordRepeat
    if (valid) {
      this.setState({
        passwordRepeatValidationError: null
      })
    } else {
      this.setState({
        passwordRepeatValidationError: 'Password didint match'
      })
    }
    return valid
  }
  firstNameIsValid = () => {
    if (this.state.firstName) {
      this.setState({
        firstNameValidationError: null
      })
      return true
    } else {
      this.setState({
        firstNameValidationError: 'Wrong first name'
      })
    }
    return false
  }
  lastNameIsValid = () => {
    if (this.state.lastName) {
      this.setState({
        lastNameValidationError: null
      })
      return true
    } else {
      this.setState({
        lastNameValidationError: 'Wrong last name'
      })
      return false
    }
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
  handleRequestClose = () => {
    this.setState({ snackOpen: false })
  }

  handleSubmit = event => {
    Axios.post(URL_USERS, {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password
    })
            .then(response =>
                this.setState({
                  snackMessage: 'User registered',
                  snackOpen: true
                })
            )
            .catch(error =>
                this.setState({
                  snackMessage: 'Failed to register',
                  snackOpen: true
                })
            )
  }

  render () {
    return (
      <div style={main}>
        <Snackbar
          open={this.state.snackOpen}
          message={this.state.snackMessage}
          autoHideDuration={this.state.snackAutoHideDuration}
          onRequestClose={this.handleRequestClose}
                />
        <h2>User registration</h2>
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
        <TextField
          name='passwordRepeat'
          type='password'
          hintText='Password repeat'
          floatingLabelText='Password repeat'
          errorText={this.state.passwordRepeatValidationError}
          onChange={this.handleChange}
                />
        <br />
        <TextField
          name='firstName'
          hintText='First name'
          floatingLabelText='First name'
          errorText={this.state.firstNameValidationError}
          onChange={this.handleChange}
                />
        <br />
        <TextField
          name='lastName'
          hintText='Last name'
          errorText={this.state.lastNameValidationError}
          floatingLabelText='Last name'
          onChange={this.handleChange}
                />
        <br />
        <RaisedButton
          label='Register'
          primary
          disabled={this.state.registerButtonDisabled}
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

export default UserRegisterForm
