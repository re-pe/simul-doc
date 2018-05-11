import React, { Component, Fragment } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// components
import Header from './components/header/Header'
import Main from './containers/main/Main'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <Fragment>
        <Header />
        <Main />
        </Fragment>
      </MuiThemeProvider>
    )
  }
}

export default App
