import React, { Component } from 'react'
import Axios from 'axios'

import Snackbar from 'material-ui/Snackbar'

import Form from '../form-elements/CustomForm'
import TextField from '../form-elements/ValidatingTextField'
import { URL_USERS } from '../../constants/Constants'
import { validateLength, validateEmail } from '../helpers/Validations'

class UserRegisterForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      snackAutoHideDuration: 2000,
      snackMessage: 'User action',
      snackOpen: false
    }
  }

  handleRequestClose = () => {
    this.setState({ snackOpen: false })
  }
  render () {
    return (
      <div>
        <Form
          title='User registration'
          buttonText='Register'
          onSubmitCallback={data => {
            Axios.post(URL_USERS, {
              email: data.email,
              firstName: data.firstName,
              lastName: data.lastName,
              password: data.password
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
          }}
                >
          <TextField
            name='email'
            hintText='Email'
            floatingLabelText='Email'
            validationFn={value => validateEmail(value)}
                    />
          <br />
          <TextField
            name='password'
            type='password'
            hintText='Password'
            floatingLabelText='Password'
            validationFn={value =>
                            validateLength(value, 6, 'Password to short')}
                    />
          <br />
          <TextField
            name='passwordRepeat'
            type='password'
            hintText='Password repeat'
            floatingLabelText='Password repeat'
            validationFn={value =>
                            validateLength(value, 6, 'Password to short')}
            onValueChange={this.onFieldValueChange}
                    />
          <br />
          <TextField
            name='firstName'
            hintText='First name'
            floatingLabelText='First name'
            validationFn={value => validateLength(value, 1, 'Enter first name')}
            onValueChange={this.onFieldValueChange}
                    />
          <br />
          <TextField
            name='lastName'
            hintText='Last name'
            floatingLabelText='Last name'
            validationFn={value => validateLength(value, 1, 'Enter last name')}
            onValueChange={this.onFieldValueChange}
                    />
          <br />
        </Form>
        <Snackbar
          open={this.state.snackOpen}
          message={this.state.snackMessage}
          autoHideDuration={this.state.snackAutoHideDuration}
          onRequestClose={this.handleRequestClose}
                />
      </div>
    )
  }
}

export default UserRegisterForm
