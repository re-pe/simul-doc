import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import emailValidator from 'email-validator';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import TextField from './TextField';

const required = value => (value ? undefined : 'Required');
const minLength = value => (value && value.length < 6 ? 'Must be 6 characters or more' : undefined);
const emailIsValid = value => (emailValidator.validate(value) ? undefined : 'Wrong email');

const FormContainer = ({ handleSubmit }) => {
  // temporary -------------------
  const submitForm = (formValues) => {
    console.log('submitting Form: ', formValues);
  };

  return (
    <div className="formContent">
      <Card>
        <CardContent>
          <Typography variant="title" color="textSecondary" align="center">
        Registration
          </Typography>
          <form onSubmit={handleSubmit(submitForm)}>
            <Field
              name="firstName"
              component={TextField}
              label="First Name"
              validate={[required]}
            />
            <Field
              name="lastName"
              component={TextField}
              label="Last Name"
              validate={[required]}
            />
            <Field
              name="email"
              component={TextField}
              label="Email"
              validate={[required, emailIsValid]}
            />
            <Field
              name="password"
              component={TextField}
              label="Password"
              type="password"
              validate={[required, minLength]}
            />
            <Button type="submit" variant="raised" color="inherit">Register</Button>
          </form>
        </CardContent>
      </Card>
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
