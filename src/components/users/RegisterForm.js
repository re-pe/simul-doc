import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import usersApi from '../../js/api/usersApi';
import TextField from './FormTextField';
import formFactory from './Form';
import * as validators from './inputValidations';


const WrappedRegisterForm = formFactory('register');

const FormContainer = (props) => {
  const submitForm = (formValues) => {
    usersApi.register(formValues)
      .then((result) => {
        props.onAlert(`${result.firstName}
         successfully registered, now u can login using ${result.email} and your password `, 0);
      })
      .catch(() => {
        // from backend we getting just 500 status, so cant help user by informning whats wrong
        props.onAlert('Failed to register', 1);
      });
  };

  return (
    <WrappedRegisterForm title="Register" buttonText="Register" submitFunction={submitForm} formName="reg" >
      <Field
        name="firstName"
        component={TextField}
        label="First Name"
        validate={[validators.validateRequired]}
      />
      <Field
        name="lastName"
        component={TextField}
        label="Last Name"
        validate={[validators.validateRequired]}
      />
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
    </WrappedRegisterForm>
  );
};

FormContainer.propTypes = {
  onAlert: PropTypes.func.isRequired,
};

export default FormContainer;
