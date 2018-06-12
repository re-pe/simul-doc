import React from 'react';
import { Field, reduxForm } from 'redux-form';

import TextField from './FormTextField';
import Form from './Form';
import * as validators from './inputValidations';

// not sure about wraping here,
// but passing configs and wrapping element when exporting
// looks more complex
// current way have risk to forgot wrap when creating custom form
const Wrapped = reduxForm({ form: 'login' })(Form);
const LoginForm = () => {
  // login handling goes here, for now just console.log
  const submitForm = (formValues) => {
    console.log('loging with: ', formValues);
  };

  return (
    <Wrapped title="Login" buttonText="Login" submitFunction={submitForm} formName="log">
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
        validate={[validators.validateRequired, validators.validateLength]}
      />
    </Wrapped>
  );
};

export default LoginForm;
