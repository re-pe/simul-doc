import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import { Redirect } from 'react-router-dom';

import { login, loadUserList } from '../../js/actions/user-actions';
import TextField from './FormTextField';
import formFactory from './Form';
import * as validators from './inputValidations';
import { loadDocumentList } from '../../js/actions/document-actions';

const WrappedLoginForm = formFactory('login');

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  loadDocumentList: () => dispatch(loadDocumentList()),
  loadUserList: () => dispatch(loadUserList()),
});

const mapStateToProps = state => ({
  logedIn: state.userReducer.user.isLogged,
});

class LoginForm extends Component {
   submitForm = (formValues) => {
     this.props.login(formValues)
       .then((result) => {
         if (result.error) {
           this.props.onAlert(result.error, 0);
         } else {
           this.props.loadDocumentList();
           this.props.loadUserList();
         }
       });
   };
   render() {
     if (this.props.logedIn) {
       return <Redirect to="/documents" />;
     }
     return (
       <WrappedLoginForm title="Login" buttonText="Login" submitFunction={this.submitForm} formName="log">
         <Field
           name="email"
           component={TextField}
           label="Email"
           validate={[validators.validateRequired, validators.validateEmail]}
         />
         <Field
           name="password"
           component={TextField}
           label="Password"
           type="password"
           validate={[validators.validateRequired, validators.validateLength(6)]}
         />
       </WrappedLoginForm>
     );
   }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  loadDocumentList: PropTypes.func.isRequired,
  loadUserList: PropTypes.func.isRequired,
  logedIn: PropTypes.bool,
  onAlert: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  logedIn: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
