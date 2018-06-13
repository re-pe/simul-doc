import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const FormContainer = props => (
  <div className="formContent">
    <Card>
      <CardContent>
        <Typography variant="title" color="textSecondary" align="center">
          {props.title}
        </Typography>
        <form onSubmit={props.handleSubmit(props.submitFunction)}>
          {props.children}
          <Button disabled={!props.valid} type="submit" variant="raised" color="inherit">{props.buttonText}</Button>
        </form>
      </CardContent>
    </Card>
  </div>
);

FormContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  submitFunction: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default function FormContainerFactory(name) {
  return reduxForm({ form: name })(FormContainer);
}
