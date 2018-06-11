import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import TextField from './TextField';

const FormContainer = ({ handleSubmit }) => {
  // temporary -------------------
  const submitForm = (formValues) => {
    console.log('submitting Form: ', formValues);
  };

  return (
    <div className="formContent">
      <Typography variant="title" color="textSecondary" align="center">
        Registration
      </Typography>
      <form onSubmit={handleSubmit(submitForm)}>
        <Field
          name="firstName"
          component={TextField}
          label="First Name"
        />
        <Field
          name="lastName"
          component={TextField}
          label="Last Name"
        />
        <Field
          name="email"
          component={TextField}
          label="Email"
        />
        <Field
          name="password"
          component={TextField}
          label="Password"
          type="password"
        />
        {/* <button type="submit">Send</button> */}
        <Button type="submit" variant="raised" color="inherit">Register</Button>
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
