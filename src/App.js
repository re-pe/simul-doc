import React, { Component, Fragment } from 'react'

import Header from './components/header/Header'
import Main from './components/main/Main'

class App extends Component {
  render () {
    return (
      <Fragment>
        <Header />
        <Main />
      </Fragment>
    )
  }
}

export default App
