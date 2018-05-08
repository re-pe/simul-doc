import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// components
import DocForm from './components/DocRegForm'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <h1>Welcome to Simul-Doc</h1>
        <DocForm />
      </MuiThemeProvider>
    )
  }
}

export default App
