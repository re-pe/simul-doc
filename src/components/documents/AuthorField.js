import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const AuthorField = (props) => {
  const {
    InputProps, classes, ref, ...other
  } = props;
  return (
    <TextField
      className="docAuthors"
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
        },
        ...InputProps,
      }}
      {...other}
    />
  );
};

AuthorField.defaultProps = {
  ref: () => {},
};

AuthorField.propTypes = {
  InputProps: PropTypes.objectOf(PropTypes.any).isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  ref: PropTypes.func,
};

export default AuthorField;
