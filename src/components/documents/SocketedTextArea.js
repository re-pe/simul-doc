import React, { Component, Fragment } from 'react';
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
      value: props.document.content,
      editorState: EditorState.createWithContent(ContentState.createFromText(props.document.content)),
    };

    subscribeToEditorChange(this.getChanges);
  }

  componentWillReceiveProps(props) {
    this.setState({
      value: props.document.content,
      editorState: EditorState.createWithContent(ContentState.createFromText(props.document.content)),
    });
  }

  getChanges = (data) => {
    console.log('getting chenges', data);
    this.setState({
      editorState: EditorState.createWithContent(ContentState.createFromText(data)),
    });
  }

  handleChange = () => {
    const text = this.state.editorState.getCurrentContent().getPlainText();
    console.log('sending with', text);
    socketApi.editDocument(this.props.document._id, text);
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };


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
