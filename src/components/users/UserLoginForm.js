import React, { Component } from 'react'
import emailValidator from 'email-validator'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from './ValidatingTextField'

class UserLoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      password: null,
      email: null,
      validFields: {
        password: false,
        email: false
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

  handleSubmit = event => {
    console.log(
            'not implemented yet i have',
            this.state,
            'maybe in future i will figure out what can i do with all those'
        )
  }

  render () {
    return (
      <div style={main}>
        <h2>Login</h2>
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
        <RaisedButton
          label='Login'
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

export default UserLoginForm
