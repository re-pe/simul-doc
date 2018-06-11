import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CreateButton from '@material-ui/icons/Add';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { createDocument } from '../../js/actions/document-actions';

const mapDispatchToProps = dispatch => ({
  createDocument: () => dispatch(createDocument()),
});

const AddNewDocumentButton = props => (
  <ListItem button divider onClick={props.createDocument}>
    <ListItemText
      primary="Create new document"
    />
    <CreateButton />
  </ListItem>
);

AddNewDocumentButton.propTypes = {
  createDocument: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AddNewDocumentButton);
