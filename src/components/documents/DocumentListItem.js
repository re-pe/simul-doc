import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import store from '../../js/store/store';
import { loadDocument } from '../../js/actions/document-actions';

class DocumentListItem extends Component {
  selectDocument = () => {
    // i feel its cheating (need go for mapdispatchprops.....). Or not :/
    store.dispatch(loadDocument(this.props.id));
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
};

export default DocumentListItem;
