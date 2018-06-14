import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import { Redirect } from 'react-router-dom';

import { login } from '../../js/actions/user-actions';
import TextField from './FormTextField';
import formFactory from './Form';
import * as validators from './inputValidations';

const WrappedLoginForm = formFactory('login');

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
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
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
