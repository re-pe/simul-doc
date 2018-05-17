import React, { Component } from 'react'

import Form from '../form-elements/CustomForm'
import TextField from '../form-elements/ValidatingTextField'
import { validateLength, validateEmail } from '../helpers/Validations'

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
        </Form>
      </div>
    )
  }
}

export default UserLoginForm
