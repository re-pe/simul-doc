import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'

const Login = props => (
  <Fragment>
    <Link style={notUndelyned} to='/users/login'>
      <FlatButton style={style} {...props} label='Login' />
    </Link>
    <Link style={notUndelyned} to='/users/register'>
      <FlatButton style={style} {...props} label='Register' />
    </Link>
  </Fragment>
)
const Logged = props => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon color='white' /></IconButton>
        }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
    <MenuItem primaryText='Refresh' />
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
    <Link style={notUndelyned} to='/users'>
      <MenuItem primaryText='Users' />
    </Link>
    <Link style={notUndelyned} to='/documents'>
      <MenuItem primaryText='Documents' />
    </Link>
  </IconMenu>
)

class ApplicationBar extends Component {
  state = {
    logged: false
  }
  render () {
    return (
      <div>
        <AppBar
          title='Simul-Doc'
          iconElementLeft={<Menu />}
          iconElementRight={
                        this.state.logged ? <Logged /> : <Login />
                    }
                />
      </div>
    )
  }
}

const style = {
  color: 'white'
}
const notUndelyned = {
  textDecoration: 'none'
}

export default ApplicationBar
