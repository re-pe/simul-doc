import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = (props) => {
  const {
    input,
    label,
    type,
    meta: { touched, error },
  } = props;
  return (
    <div className="formTextField">
      <TextField
        label={label}
        type={type || 'input'}
        {...input}
      />
    </div>
  );
};

export default Input;
