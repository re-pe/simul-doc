import React from 'react';
import { Field } from 'redux-form';

// not sure about overriding html o material component names
// but if material can create components with same as html names
// why can not i?
import TextField from './FormTextField';
import formFactory from './Form';
import * as validators from './inputValidations';

const WrappedRegisterForm = formFactory('register');

const FormContainer = () => {
  // Register handling goes here, for now just console.log
  const submitForm = (formValues) => {
    console.log('registering with: ', formValues);
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

export default FormContainer;
