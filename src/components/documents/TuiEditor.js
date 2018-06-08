// deps for editor
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';
import Editor from 'tui-editor';

class TuiEditor extends Component {
  componentDidMount() {
    this.editor = new Editor({
      el: document.querySelector('#editSection'),
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height: '300px',
      initialValue: this.props.content,
    });
  }

  componentDidUpdate() {
    this.editor.reset();
    this.editor.setMarkdown(this.props.content);
  }

  render() {
    return <div id="editSection" className="docContent" />;
  }
}

TuiEditor.propTypes = {
  content: PropTypes.string.isRequired,
};

export default TuiEditor;
