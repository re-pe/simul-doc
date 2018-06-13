import React from 'react';
import { connect } from 'react-redux';
import { Field } from 'redux-form';

import { login } from '../../js/actions/user-actions';
import TextField from './FormTextField';
import formFactory from './Form';
import * as validators from './inputValidations';

const WrappedLoginForm = formFactory('login');

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
});

const LoginForm = (props) => {
  const submitForm = (formValues) => {
    props.login(formValues);
  };

  return (
    <WrappedLoginForm title="Login" buttonText="Login" submitFunction={submitForm} formName="log">
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
};

export default connect(null, mapDispatchToProps)(LoginForm);
