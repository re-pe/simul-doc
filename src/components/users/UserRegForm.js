import React, { Component } from 'react'
import fetch from 'cross-fetch'
// material
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
//custom
import {URL_USERS} from '../../constants/Constants'

class UserRegForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: ''
    }
  }

  handleChange = event => {
    const target = event.currentTarget
    this.setState({
      [target.name]: target.value
    })
  }

  handleSubmit = event => {
    fetch(URL_USERS, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response))
  }

  render () {
    return (
      <div>
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
          hintText='Password'
          floatingLabelText='Password'
          onChange={this.handleChange}
                />
        <br />
        <TextField
          name='passwordRepeat'
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
          onClick={this.handleSubmit}
                />
      </div>
    )
  }
}

export default UserRegForm
