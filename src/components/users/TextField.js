import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = (props) => {
  const {
    input,
    label,
    type,
    meta: { touched, error },
  } = props;
  let helper = `Enter ${label}`;
  if (touched && error) {
    helper = error;
  }
  return (
    <div className="formTextField">
      <TextField
        label={label}
        type={type || 'input'}
        {...input}
        error={touched && error}
        helperText={helper}
      />
    </div>
  );
};

export default Input;
