import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import store from '../../js/store/store';
import { loadDocument, loadDocumentList } from '../../js/actions/document-actions';
import { URL } from '../../js/constants/constants';

const moment = require('moment');

class DocumentListItem extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  selectDocument = () => {
    store.dispatch(loadDocument(this.props.id));
  }

  deleteDocument = () => {
    this.handleClose();
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
      <Fragment >
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >`
          <DialogTitle id="alert-dialog-title">Confirm deletion</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Delete the document {this.props.title}?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>
              No
            </Button>
            <Button onClick={this.deleteDocument} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>

        <ListItem button divider onClick={this.selectDocument}>
          <ListItemText
            primary={this.props.title}
            secondary={`${moment(this.props.created).format('YYYY-MM-DD')} (${moment(this.props.created).fromNow()})`}
          />
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={this.handleClickOpen}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </Fragment>
    );
  }
}

DocumentListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
};

export default DocumentListItem;
