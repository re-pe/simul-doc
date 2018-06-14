// deps for editor
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Editor from 'tui-editor/dist/tui-editor-Editor-all';
import 'tui-editor/dist/tui-editor-extTable';
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';

class TuiEditor extends Component {
  constructor() {
    super();
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  componentDidMount() {
    this.editor = new Editor({
      el: document.querySelector('#editSection'),
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height: '300px',
      initialValue: this.props.content,
      exts: ['scrollSync', 'colorSyntax', 'uml', 'chart', 'mark', 'table', 'taskCounter'],
      events: {
        change: this.onChangeHandler,
      },
    });
  }

  componentDidUpdate() {
    this.editor.reset();
    this.editor.setMarkdown(this.props.content);
  }

  onChangeHandler() {
    const content = this.editor.getValue();
    if (content === this.props.content) return;
    const data = {
      content,
    };
    this.props.modifyDocument(this.props.documentId, data);
  }

  render() {
    return <div id="editSection" className="docContent" />;
  }
}

TuiEditor.propTypes = {
  documentId: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  modifyDocument: PropTypes.func.isRequired,
};

export default TuiEditor;
