import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { subscribeToEditorChange, socketApi } from '../../js/api/socketApi';

const JsDiff = require('diff');

const mapStateToProps = state => ({
  document: state.documentReducer.selectedDocument,
});

class SocketedTextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalContent: props.document.content,
      editorState: this.textTostate(props.document.content),
    };

    subscribeToEditorChange(this.getChanges);
  }

  componentWillReceiveProps(props) {
    this.setState({
      originalContent: props.document.content,
      editorState: this.textTostate(props.document.content),
    });
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  getChanges = (data) => {
    this.setState({
      editorState: this.textTostate(data),
    });
  }

  getDiffrences = () => JsDiff.diffChars(this.state.originalContent, this.stateToText());
  stateToText = () => this.state.editorState.getCurrentContent().getPlainText();
  textTostate = text => EditorState.createWithContent(ContentState.createFromText(text));

  handleChange = () => {
    // console.log('will send', this.getDiffrences());
    socketApi.editDocument(this.props.document._id, this.stateToText());
  }

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
