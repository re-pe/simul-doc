import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const DocumentListItem = props => (
  <Fragment>
    <ListItem button divider>
      <ListItemText primary={props.title} secondary={props.created} />
    </ListItem>
  </Fragment>
);

DocumentListItem.propTypes = {
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
};

export default DocumentListItem;
