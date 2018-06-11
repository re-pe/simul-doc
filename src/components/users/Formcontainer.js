import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

const FormContainer = ({ handleSubmit }) => {
  // temporary -------------------
  const submitForm = (formValues) => {
    console.log('submitting Form: ', formValues);
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <Field
          name="firstName"
          component="input"
        />
        <Field
          name="lastName"
          component="input"
        />
        <Field
          name="email"
          component="input"
        />
        <Field
          name="password"
          component="input"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

FormContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const formConfiguration = {
  form: 'registration',
};

export default reduxForm(formConfiguration)(FormContainer);
