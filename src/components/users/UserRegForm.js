import React, { Component } from 'react'
// material
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

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

  handleSubmit= event => {
    console.log('Will send ', this.state)
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
