import React, { Component } from 'react'
import Axios from 'axios'
import { debounce } from 'throttle-debounce'
import emailValidator from 'email-validator'
// material
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar'
// custom
import { URL_USERS } from '../../constants/Constants'

class UserRegForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      registerButtonDisabled: true,
      snackAutoHideDuration: 2000,
      snackMessage: 'User registered',
      snackOpen: false
    }
  }

  validate = () => {
    this.setState({
      registerButtonDisabled: !(this.emailIsValid() &&
                this.passIsValid() &&
                this.namesIsValid())
    })
  }
  namesIsValid = () => {
    return this.state.firstName && this.state.lastName
  }
  passIsValid = () => {
    return (
            this.state.passwordRepeat === this.state.password &&
            (this.state.password && this.state.password.length > 5)
    )
  }
  emailIsValid = () => {
    return emailValidator.validate(this.state.email)
  }

  handleChange = event => {
    const target = event.currentTarget
    this.setState({
      [target.name]: target.value
    })

    debounce(500, () => {
      this.validate()
    })()
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
          onChange={this.handleChange}
                />
        <br />
        <TextField
          name='password'
          type='password'
          hintText='Password'
          floatingLabelText='Password'
          onChange={this.handleChange}
                />
        <br />
        <TextField
          name='passwordRepeat'
          type='password'
          hintText='Password repeat'
          floatingLabelText='Password repeat'
          onChange={this.handleChange}
                />
        <br />
        <TextField
          name='firstName'
          hintText='First name'
          floatingLabelText='First name'
          onChange={this.handleChange}
                />
        <br />
        <TextField
          name='lastName'
          hintText='Last name'
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

export default UserRegForm
