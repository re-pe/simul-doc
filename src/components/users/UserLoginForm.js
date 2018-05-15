import React, { Component } from 'react'

import Form from '../form-elements/CustomForm'
import TextField from '../form-elements/ValidatingTextField'

import emailValidator from 'email-validator'

class UserLoginForm extends Component {
  render () {
    return (
      <div>
        <Form
          title='User Login'
          buttonText='Login'
          onSubmitCallback={data => {
            console.log(
                            'will log with this ',
                            data.email,
                            data.password
                        )
          }}
                >
          <TextField
            name='email'
            hintText='Email'
            floatingLabelText='Email'
            validationFn={value =>
                            !emailValidator.validate(value) && 'Wrong email'}
                    />
          <br />
          <TextField
            name='password'
            type='password'
            hintText='Password'
            floatingLabelText='Password'
            validationFn={value =>
                            value.length < 6 && 'Password to short'}
                    />
          <br />
        </Form>
      </div>
    )
  }
}

export default UserLoginForm
