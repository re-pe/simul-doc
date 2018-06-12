import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import TextField from './TextField';
import * as validators from './inputValidations';
import Form from './Form';


const FormContainer = () => {
  // temporary -------------------
  const submitForm = (formValues) => {
    console.log('submitting Form: ', formValues);
  };

  return (
    <Form title="Register" buttonText="Register" submitFn={submitForm}>
      <Field
        name="firstName"
        component={TextField}
        label="First Name"
        validate={[validators.validateRequired]}
      />
    </Form>
  );
};

FormContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
};

const formConfiguration = {
  form: 'registration',
};

export default reduxForm(formConfiguration)(FormContainer);
