import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import TuiEditor from './TuiEditor';

const mapStateToProps = state => ({
  selected: state.documentReducer.selected,
});

const DocumentEditor = (props) => {
  const { selected } = props;
  let content = <div>No document selected</div>;
  if (selected) {
    content = (
      <Fragment>
        <Typography paragraph className="docTitle">Title: {selected.title}</Typography>
        <Typography paragraph>Owner: {selected.owner.firstName}</Typography>
        <Typography paragraph>Authors:
          {selected.authors.reduce((curr, next) => `${curr + next.firstName} `, '')}
        </Typography>
        <Typography paragraph>Created at: {selected.createdAt}</Typography>
        <Typography paragraph>Updated at: {selected.updatedAt}</Typography>
        <TuiEditor content={selected.content} />
      </Fragment>
    );
  }
  return (
    <div className="docEditor">
      {content}
    </div>);
};

DocumentEditor.defaultProps = {
  selected: undefined,
};

DocumentEditor.propTypes = {
  selected: PropTypes.objectOf(PropTypes.any),
};

export default connect(mapStateToProps)(DocumentEditor);
