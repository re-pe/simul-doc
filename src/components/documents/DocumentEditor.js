import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const mapStateToProps = state => ({
  selected: state.documentReducer.selected,
});

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateAreas: '"title title" "auto auto"  "auto auto" "content content"',
  },
  title: {
    gridArea: 'title',
  },
  content: {
    gridArea: 'content',
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

class DocumentEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { selected, classes } = this.props;
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
          <TextField
            classes={{
              textField: classes.textField,
              content: classes.content,
            }}
            label="Content"
            defaultValue={selected.content}
            multiline
            margin="normal"
          />
        </Fragment>
      );
    }
    return (
      <div className={classes.container}>
        {content}
      </div>);
  }
}

DocumentEditor.defaultProps = {
  selected: undefined,
};

DocumentEditor.propTypes = {
  selected: PropTypes.objectOf(PropTypes.any),
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

const DocumentEditorWithStore = connect(mapStateToProps)(DocumentEditor);
export default withStyles(styles)(DocumentEditorWithStore);
