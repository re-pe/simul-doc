import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import { loadDocument } from '../../js/actions/document-actions';

const moment = require('moment');

class DocumentListItem extends Component {
  selectDocument = () => {
    this.props.selectDocument(this.props.id);
  }

  deleteDocument = () => {
    this.props.openConfirmDialog(this.props.id, this.props.title);
  }

  render() {
    return (
      <Fragment >
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
      </Fragment>
    );
  }
}

DocumentListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  openConfirmDialog: PropTypes.func.isRequired,
  selectDocument: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  selectDocument: id => dispatch(loadDocument(id)),
});

export default connect(null, mapDispatchToProps)(DocumentListItem);
