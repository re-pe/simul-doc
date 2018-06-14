import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { logout } from '../../js/actions/user-actions';

const mapStateToProps = state => ({
  logedIn: state.userReducer.user.isLogged,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

const LoginLogoutButton = (props) => {
  if (props.logedIn) {
    return (
      <div>
        <Button onClick={props.logout} color="inherit">Logout</Button>
      </div>
    );
  }
  return (
    <div>
      <Button component={Link} to="/login" color="inherit">Login</Button>
    </div>
  );
};

LoginLogoutButton.propTypes = {
  logedIn: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};

LoginLogoutButton.defaultProps = {
  logedIn: false,
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginLogoutButton);
