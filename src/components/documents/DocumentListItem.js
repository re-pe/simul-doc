import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


class DocumentListItem extends Component {
  selectDocument = () => {
    this.props.onSelect(this.props.id);
  }

  render() {
    return (
      <ListItem button divider onClick={this.selectDocument}>
        <ListItemText primary={this.props.title} secondary={this.props.created} />
      </ListItem>
    );
  }
}

DocumentListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default DocumentListItem;
