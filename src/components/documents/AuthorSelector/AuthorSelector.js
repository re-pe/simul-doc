
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import 'react-select/dist/react-select.css';
import styles from './AuthorSelectorStyle';
import { modifyDocument } from '../../../js/actions/document-actions';
import SelectWrapped from './AUthorSelectWrapped';

const getSuggestions = data =>
  data.map(item => ({ value: item._id, label: item.email.toLowerCase() }));

const getProperty = (data, property) => data.map(item => item[property]);

const AuthorSelector = (props) => {
  const { classes } = props;
  const authors = getProperty(props.selectedDocument.authors, '_id').join(',');
  const suggestions = getSuggestions(props.userList);
  const handleChange = value => props.modifyDocument(props.selectedDocument._id, { authors: value.split(',') });

  return (
    <div className={classes.root}>
      <TextField
        fullWidth
        value={authors}
        onChange={handleChange}
        placeholder="Select authors"
        name="react-select-chip-label"
        label="Authors"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          inputComponent: SelectWrapped,
          inputProps: {
            classes,
            multi: true,
            instanceId: 'react-select-chip-label',
            id: 'react-select-chip-label',
            simpleValue: true,
            options: suggestions,
          },
        }}
      />
    </div>
  );
};

AuthorSelector.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  selectedDocument: PropTypes.objectOf(PropTypes.any).isRequired,
  userList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  modifyDocument: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  selectedDocument: state.documentReducer.selectedDocument,
  userList: state.userReducer.userList,
});

const mapDispatchToProps = dispatch => ({
  modifyDocument: (id, data) => dispatch(modifyDocument(id, data)),
});

export default
withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AuthorSelector));
