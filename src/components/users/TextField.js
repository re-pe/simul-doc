import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = (props) => {
  const {
    input,
    label,
    type,
    meta: { touched, error, warning },
  } = props;
  let helper = `Enter ${label}`;
  if (touched && error) {
    helper = error;
  } else if (touched && warning) {
    helper = warning;
  }
  return (
    <div className="formTextField">
      <TextField
        label={label}
        type={type || 'input'}
        {...input}
        error={touched && (warning || error)}
        helperText={helper}
      />
    </div>
  );
};

export default Input;
