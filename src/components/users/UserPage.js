import React, { Component, Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import SwipeableViews from 'react-swipeable-views';


import Register from './RegisterForm';
import Login from './LoginForm';

class Users extends Component {
  state = {
    activeTabIndex: 0,
    alertShown: false,
    alertText: null,
  };

  handleChange = (event, activeTabIndex) => {
    this.setState({ activeTabIndex });
  };

  handleChangeIndex = (index) => {
    this.setState({ activeTabIndex: index });
  };

  closeAlert = () => {
    this.setState({
      alertShown: false,
    });
  }

  showAlert = (alertText, activeTabIndex) => {
    this.setState({
      alertText,
      alertShown: true,
      activeTabIndex,
    });
  }

  render() {
    return (
      <Fragment>
        <Dialog
          open={this.state.alertShown}
          onClose={this.closeAlert}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.state.alertText}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeAlert} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
        <div className="formContainer">
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.activeTabIndex}
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
            index={this.state.activeTabIndex}
            onChangeIndex={this.handleChangeIndex}
          >
            <Login onAlert={this.showAlert} />
            <Register onAlert={this.showAlert} />
          </SwipeableViews>
        </div>
      </Fragment>
    );
  }
}

export default Users;
