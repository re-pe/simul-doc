import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const mapStateToProps = state => ({
  logedIn: state.userReducer.user.isLogged,
});

const LoginLogoutButton = (props) => {
  if (props.logedIn) {
    return (
      <div>
        <Button component={Link} to="/logout" color="inherit">Logout</Button>
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
  logedIn: PropTypes.bool.isRequired,
};


export default connect(mapStateToProps)(LoginLogoutButton);
