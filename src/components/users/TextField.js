import React from 'react';
import PropTypes from 'prop-types';
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
        type={type}
        {...input}
        error={touched && !!error}
        helperText={helper}
      />
    </div>
  );
};

Input.defaultProps = {
  type: 'input',
};

Input.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  meta: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Input;
