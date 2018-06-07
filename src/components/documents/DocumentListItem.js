import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
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

import * as documentActions from '../../js/actions/document-actions';

// import store from '../../js/store/store';
// import { loadDocument } from '../../js/actions/document-actions';

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
    // store.dispatch(loadDocument(this.props.id));
  }

  deleteDocument = () => {
    this.handleClose();
    this.props.actions.deleteDocument(this.props.id);
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(documentActions, dispatch),
  };
}
export default connect(null, mapDispatchToProps)(DocumentListItem);
