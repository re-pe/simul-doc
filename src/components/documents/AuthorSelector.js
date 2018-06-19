
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import DownshiftMultiple from './DownshiftMultiple';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250,
    width: '100%',
    gridArea: 'authors',
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  inputRoot: {
    flexWrap: 'wrap',
  },
});

const mapStateToProps = state => ({
  users: state.userReducer.userList,
});

function AuthorSelector(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <DownshiftMultiple classes={classes} />
    </div>
  );
}

AuthorSelector.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  // users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(connect(mapStateToProps)(AuthorSelector));
