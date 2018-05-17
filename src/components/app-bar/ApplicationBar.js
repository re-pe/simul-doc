import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'

const LoginDashboard = props => (
  <Fragment>
    <Link  to='/users/login'>
      <FlatButton style={buttons} {...props} label='Login' />
    </Link>
    <Link to='/users/register'>
      <FlatButton style={buttons} {...props} label='Register' />
    </Link>
  </Fragment>
)
const UserDashboard = props => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon color='white' /></IconButton>
        }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
    <MenuItem primaryText='My profile' />
    <MenuItem primaryText='Help' />
    <MenuItem primaryText='Sign out' />
  </IconMenu>
)
const Menu = props => (
  <IconMenu
    {...props}
    iconButtonElement={<IconButton><MenuIcon color='white' /></IconButton>}
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
    <Link style={links} to='/users'>
      <MenuItem primaryText='Users' />
    </Link>
    <Link style={links} to='/documents'>
      <MenuItem primaryText='Documents' />
    </Link>
  </IconMenu>
)

class ApplicationBar extends Component {
  state = {
    authenticated: false
  }
  render () {
    return (
      <div>
        <AppBar
          title='Simul-Doc'
          iconElementLeft={<Menu />}
          iconElementRight={
                        this.state.authenticated
                            ? <UserDashboard />
                            : <LoginDashboard />
                    }
                />
      </div>
    )
  }
}

const buttons ={
  color: 'white',
  marginTop: '5px'
}
const links={
  textDecoration: 'none'
}

export default ApplicationBar
