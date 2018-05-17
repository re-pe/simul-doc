import React from 'react'
import { Switch, Route } from 'react-router-dom'
// custom
import Home from '../../components/home/Home'
import Documents from '../../components/documents/Documents'
import Users from '../../components/users/Users'
import UserLoginForm from '../../components/users/UserLoginForm'
import UserRegisterForm from '../../components/users/UserRegisterForm'
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/users/login' component={UserLoginForm} />
      <Route path='/users/register' component={UserRegisterForm} />
      <Route path='/users' component={Users} />
      <Route path='/documents' component={Documents} />
    </Switch>
  </main>
)

export default Main
