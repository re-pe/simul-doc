import React from 'react'
import { Switch, Route } from 'react-router-dom'
// custom
import Home from '../../components/home/Home'
import Documents from '../../components/documents/registerForm/DocRegForm'
import Users from '../../components/users/Users'
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/users' component={Users} />
      <Route path='/documents' component={Documents} />
    </Switch>
  </main>
)

export default Main
