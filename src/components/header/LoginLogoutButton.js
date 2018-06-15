import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { logout } from '../../js/actions/user-actions';
import { resetDocumentsState } from '../../js/actions/document-actions';

const mapStateToProps = state => ({
  logedIn: state.userReducer.user.isLogged,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  resetDocumentsState: () => dispatch(resetDocumentsState()),
});

const LoginLogoutButton = (props) => {
  const handleLogout = () => {
    props.logout();
    props.resetDocumentsState();
  };

  if (props.logedIn) {
    return (
      <div>
        <Button onClick={handleLogout} color="inherit">Logout</Button>
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
  resetDocumentsState: PropTypes.func.isRequired,
};

LoginLogoutButton.defaultProps = {
  logedIn: false,
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginLogoutButton);
