import React, { Component } from 'react'
import Axios from 'axios'
import emailValidator from 'email-validator'

import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar'

import TextField from './ValidatingTextField'
import { URL_USERS } from '../../constants/Constants'

class UserRegisterForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      snackAutoHideDuration: 2000,
      snackMessage: 'User action',
      snackOpen: false,
      email: null,
      password: null,
      passwordRepeat: null,
      firstName: null,
      lastName: null,
      validFields: {
        email: false,
        password: false,
        passwordRepeat: false,
        firstName: false,
        lastName: false
      }
    }
  }

  onFieldValueChange = (fieldName, fieldValue, hasError) => {
    this.setState(prevState => ({
      [fieldName]: fieldValue,
      validFields: {
        ...prevState.validFields,
        [fieldName]: !hasError
      }
    }))
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
          validationFn={value =>
                        !emailValidator.validate(value) && 'Wrong email'}
          onValueChange={this.onFieldValueChange}
                />
        <br />
        <TextField
          name='password'
          type='password'
          hintText='Password'
          floatingLabelText='Password'
          validationFn={value =>
                        value.length < 6 && 'Password to short'}
          onValueChange={this.onFieldValueChange}
                />
        <br />
        <TextField
          name='passwordRepeat'
          type='password'
          hintText='Password repeat'
          floatingLabelText='Password repeat'
          validationFn={value =>
                        value !== this.state.password &&
                        'password didint match'}
          onValueChange={this.onFieldValueChange}
                />
        <br />
        <TextField
          name='firstName'
          hintText='First name'
          floatingLabelText='First name'
          validationFn={value => !value && 'Enter first name'}
          onValueChange={this.onFieldValueChange}
                />
        <br />
        <TextField
          name='lastName'
          hintText='Last name'
          floatingLabelText='Last name'
          validationFn={value => !value && 'Enter last name'}
          onValueChange={this.onFieldValueChange}
                />
        <br />
        <RaisedButton
          label='Register'
          primary
          disabled={
                        !Object.values(this.state.validFields).every(
                            field => field === true
                        )
                    }
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
