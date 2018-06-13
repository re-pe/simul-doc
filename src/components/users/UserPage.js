import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';

import Register from './RegisterForm';
import Login from './LoginForm';

class Users extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  render() {
    return (
      <div className="formContainer">
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="inherit"
            fullWidth
          >
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis="x-reverse"
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <Login />
          <Register />
        </SwipeableViews>
      </div>
    );
  }
}

export default Users;
