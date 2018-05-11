import React from 'react'
import { Switch, Route } from 'react-router-dom'
// custom
import Home from '../../components/home/Home'
import Documents from '../../components/documents/Documents'
import Users from '../../components/users/Users'
import Login from '../../components/users/Login'
import RegisterUser from '../../components/users/UserRegForm'
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/users/login' component={Login} />
      <Route path='/users/register' component={RegisterUser} />
      <Route path='/users' component={Users} />
      <Route path='/documents' component={Documents} />
    </Switch>
  </main>
)

export default Main
