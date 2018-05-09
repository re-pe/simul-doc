import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// components
import Header from './components/header/Header'
import Main from './containers/main/Main'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <Header />
        <Main />
      </MuiThemeProvider>
    )
  }
}

export default App
