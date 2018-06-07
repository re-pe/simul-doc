import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

class AddNewDocumentButton extends Component {
  render() {
    return (
      <ListItem button divider onClick={this.createNewDocument}>
        <ListItemText
          primary="Create new document"
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="Create" onClick={this.createNewDocument}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default AddNewDocumentButton;
