import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import TuiEditor from './TuiEditor';

const mapStateToProps = state => ({
  selectedDocument: state.documentReducer.selectedDocument,
});

const DocumentEditor = (props) => {
  const selected = props.selectedDocument;
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
  selectedDocument: undefined,
};

DocumentEditor.propTypes = {
  selectedDocument: PropTypes.objectOf(PropTypes.any),
};

export default connect(mapStateToProps)(DocumentEditor);
