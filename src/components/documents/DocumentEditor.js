import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import TuiEditor from './TuiEditor';
import { modifyDocument } from '../../js/actions/document-actions';

const mapStateToProps = state => ({
  selectedDocument: state.documentReducer.selectedDocument,
});

const mapDispatchToProps = dispatch => ({
  modifyDocument: (id, data) => dispatch(modifyDocument(id, data)),
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
        <TuiEditor
          documentId={selected._id}
          modifyDocument={props.modifyDocument}
          content={selected.content}
        />
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
  modifyDocument: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DocumentEditor);
