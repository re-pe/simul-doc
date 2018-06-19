import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import SocketedTextArea from './SocketedTextArea';
import { modifyDocument } from '../../js/actions/document-actions';

const mapStateToProps = state => ({
  selectedDocument: state.documentReducer.selectedDocument,
});

const mapDispatchToProps = dispatch => ({
  modifyDocument: (id, data) => dispatch(modifyDocument(id, data)),
});

class DocumentEditor extends Component {
  onChangeHandler(e) {
    const title = e.target.value;
    if (title === this.props.selectedDocument.title) return;
    const data = {
      title,
    };
    this.props.modifyDocument(this.props.selectedDocument.id, data);
  }

  render() {
    const selected = this.props.selectedDocument;
    let content = <div>No document selected</div>;
    if (selected) {
      content = (
        <Fragment>
          <TextField
            required
            className="docTitle"
            label="Title:"
            value={selected.title}
            margin="normal"
            onChange={this.onChangeHandler}
          />
          <Typography color="primary" paragraph>Owner:{<br />}{selected.owner.firstName}</Typography>
          <Typography color="primary" paragraph>Created at:{<br />}{selected.createdAt}</Typography>
          <Typography color="primary" paragraph>Updated at:{<br />}{selected.updatedAt}</Typography>
          <TextField
            required
            multiline
            className="docAuthors"
            label="Authors:"
            value={`${selected.authors.map(author => `\n${author.firstName}`)}`}
          />
          <SocketedTextArea />
        </Fragment>
      );
    }
    return (
      <div className="docEditor">
        {content}
      </div>);
  }
}

DocumentEditor.defaultProps = {
  selectedDocument: undefined,
};

DocumentEditor.propTypes = {
  selectedDocument: PropTypes.objectOf(PropTypes.any),
  modifyDocument: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DocumentEditor);
