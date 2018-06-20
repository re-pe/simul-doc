import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { subscribeToEditorChange, socketApi } from '../../js/api/socketApi';

const mapStateToProps = state => ({
  document: state.documentReducer.selectedDocument,
});

class SocketedTextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: this.transformToState(props.document.content),
    };

    subscribeToEditorChange(this.getChanges);
  }

  componentWillReceiveProps(props) {
    this.setState({
      editorState: this.transformToState(props.document.content),
    });
  }


  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  getChanges = (data) => {
    this.setState({
      editorState: this.transformToState(data),
    });
  }

  handleChange = () => {
    socketApi.editDocument(this.props.document._id, this.transformToText());
  }

  transformToText = () => this.state.editorState.getCurrentContent().getPlainText();
  transformToState = text => EditorState.createWithContent(ContentState.createFromText(text));

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        editorState={editorState}
        onEditorStateChange={this.onEditorStateChange}
        onChange={this.handleChange}
      />);
  }
}

SocketedTextArea.propTypes = {
  document: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(SocketedTextArea);
