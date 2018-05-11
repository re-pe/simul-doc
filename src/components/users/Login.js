import React, { Component } from 'react'
import Axios from 'axios'
import { debounce } from 'throttle-debounce'
import emailValidator from 'email-validator'
// material
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
// custom
import { URL_USERS } from '../../constants/Constants'

class UserRegForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loginButtonDisabled: true
    }
  }

  validate = () => {
    this.setState({
      registerButtonDisabled: !(this.emailIsValid() & this.passIsValid())
    })
  }

  emailIsValid = () => {
    const valid = emailValidator.validate(this.state.email)
    if (valid) {
      this.setState({
        validEmail: ''
      })
    } else {
      this.setState({
        validEmail: 'Wrong email'
      })
    }
    return valid
  }
  passIsValid = () => {
    const valid = this.state.password && this.state.password.length > 5
    if (valid) {
      this.setState({
        validPass: ''
      })
    } else {
      if (this.state.password) {
        this.setState({
          validPass: 'Pass must be at least 6 simbols'
        })
      } else {
        this.setState({
          validPass: 'Enter password'
        })
      }
    }
    return valid
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

  handleSubmit = event => {
    console.log('login dont implemented yet')
  }

  render () {
    return (
      <div style={main}>
        <h2>Login</h2>
        <TextField
          name='email'
          hintText='Email'
          floatingLabelText='Email'
          errorText={this.state.validEmail}
          onChange={this.handleChange}
                />
        <br />
        <TextField
          name='password'
          type='password'
          hintText='Password'
          errorText={this.state.validPass}
          floatingLabelText='Password'
          onChange={this.handleChange}
                />
        <br />
        <RaisedButton
          label='Login'
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
