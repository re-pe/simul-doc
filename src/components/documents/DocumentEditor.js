import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TuiEditor from './TuiEditor';

const mapStateToProps = state => ({
  selected: state.documentReducer.selected,
});

const styles = () => ({
  container: {
    margin: '10px',
    display: 'grid',
    gridTemplateAreas: '"title title" "auto auto"  "auto auto" "content content"',
  },
  title: {
    gridArea: 'title',
  },
  editor: {
    gridArea: 'content',
  },
});

const DocumentEditor = (props) => {
  const { selected, classes } = props;
  let content = <div>No document selected</div>;
  if (selected) {
    content = (
      <Fragment>
        <Typography paragraph className={classes.title}>Title: {selected.title}</Typography>
        <Typography paragraph>Owner: {selected.owner.firstName}</Typography>
        <Typography paragraph>Authors:
          {selected.authors.reduce((curr, next) => `${curr + next.firstName} `, '')}
        </Typography>
        <Typography paragraph>Created at: {selected.createdAt}</Typography>
        <Typography paragraph>Updated at: {selected.updatedAt}</Typography>
        <TuiEditor classString={classes.editor} content={selected.content} />
      </Fragment>
    );
  }
  return (
    <div className={classes.container}>
      {content}
    </div>);
};

DocumentEditor.defaultProps = {
  selected: undefined,
};

DocumentEditor.propTypes = {
  selected: PropTypes.objectOf(PropTypes.any),
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

const DocumentEditorWithStore = connect(mapStateToProps)(DocumentEditor);
export default withStyles(styles)(DocumentEditorWithStore);
