import React, { Component } from 'react'

import CustomForm from './CustomForm'
import TextField from './ValidatingTextField'

import emailValidator from 'email-validator'


class CustomUserLoginForm extends Component {

  onFieldValueChange = (fieldName, fieldValue, hasError) => {
    this.setState(prevState => ({
      [fieldName]: fieldValue,
      validFields: {
        ...prevState.validFields,
        [fieldName]: !hasError
      }
    }))
  }
  render () {
    return (
      <div>
        <CustomForm
          title='User Login'
          buttonText='Login'
          onSubmitCallback={data => {console.log('will log with this ',data.email, data.password)}}
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
        </CustomForm>
      </div>
    )
  }
}

export default CustomUserLoginForm
