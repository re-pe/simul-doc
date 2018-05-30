import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const DocumentListItem = props => (
  <Fragment>
    <ListItem button>
      <ListItemText primary={props.title} secondary={props.created} />
    </ListItem>
    <Divider />
  </Fragment>
);

DocumentListItem.propTypes = {
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
};

export default DocumentListItem;
