import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const mapStateToProps = state => ({
  selected: state.documentReducer.selected,
});

const styles = theme => ({
  dataContainer: {
    display: 'grid',
    gridTemplateColumns: 'auto',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});


const DocumentEditor = (props) => {
  const { selected } = props;
  const { classes } = props;
  let content = <div>No document selected</div>;
  if (selected) {
    content = (
      <Fragment>
        <TextField
          className={classes.textField}
          label="Title"
          value={selected.title}
        />
        <TextField
          className={classes.textField}
          label="Owner"
          value={selected.owner.firstName}
        />
        <TextField
          className={classes.textField}
          label="Authors:"
          value={selected.authors.reduce((curr, next) =>
            `${curr + next.firstName} `, '')}
        />
        <TextField
          className={classes.textField}
          label="Created at:"
          value={selected.createdAt}
        />
        <TextField
          className={classes.textField}
          label="Updated at:"
          value={selected.updatedAt}
        />
        <TextField
          className={classes.textField}
          label="Content"
          value={selected.content}
        />
      </Fragment >
    );
  }
  return (
    <div className={classes.dataContainer}>
      {content}
    </div>);
};

DocumentEditor.defaultProps = {
  selected: undefined,
};
DocumentEditor.propTypes = {
  // not sure about validating document, is enough?
  // or should i use shape to validate each field in object
  selected: PropTypes.objectOf(PropTypes.any),
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

const DocumentEditorWithStore = connect(mapStateToProps)(DocumentEditor);
export default withStyles(styles)(DocumentEditorWithStore);
