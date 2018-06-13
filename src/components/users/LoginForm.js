import React from 'react';
import { Field } from 'redux-form';
import TextField from './FormTextField';
import formFactory from './Form';
import * as validators from './inputValidations';

const WrappedLoginForm = formFactory('login');

const LoginForm = () => {
  // login handling goes here, for now just console.log
  const submitForm = (formValues) => {
    console.log('loging with: ', formValues);
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

export default LoginForm;
