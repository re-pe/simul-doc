import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';


import store from '../../js/store/store';
import { loadDocument, loadDocumentList } from '../../js/actions/document-actions';
import { URL } from '../../js/constants/constants';

const moment = require('moment');

class DocumentListItem extends Component {
  selectDocument = () => {
    store.dispatch(loadDocument(this.props.id));
  }

  deleteDocument = () => {
    axios
      .delete(`${URL}/documents/${this.props.id}`)
      .then((response) => {
        if (response.status === 204) {
          // what is better after delete just resync document list from backend using loadDocsAction
          // or should new action created that removes document from redux store
          //  without request to backend
          store.dispatch(loadDocumentList());
        }
      })
      .catch((error) => {
        // we should make abstract element for error to diplay error
        console.log(error);
      });
  }

  render() {
    return (
      <ListItem button divider onClick={this.selectDocument}>
        <ListItemText
          primary={this.props.title}
          secondary={`${moment(this.props.created).format('YYYY-MM-DD')} (${moment(this.props.created).fromNow()})`}
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete" onClick={this.deleteDocument}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

DocumentListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
};

export default DocumentListItem;
