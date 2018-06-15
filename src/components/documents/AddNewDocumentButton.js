import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CreateButton from '@material-ui/icons/Add';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { createDocument } from '../../js/actions/document-actions';

const mapDispatchToProps = dispatch => ({
  createDocument: ownerId => dispatch(createDocument(ownerId)),
});

const mapStateToProps = state => ({
  ownerId: state.userReducer.user.userData._id,
});

const AddNewDocumentButton = props => (
  <ListItem button divider onClick={() => props.createDocument(props.ownerId)}>
    <ListItemText
      primary="Create new document"
    />
    <CreateButton />
  </ListItem>
);

AddNewDocumentButton.propTypes = {
  createDocument: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewDocumentButton);
