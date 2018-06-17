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
  // constructor() {
  //   super();
  //   // this.onChangeHandler = this.onChangeHandler.bind(this);
  // }

  componentDidMount() {
    this.editor = new Editor({
      el: document.querySelector('#editSection'),
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height: '300px',
      exts: ['scrollSync', 'colorSyntax', 'uml', 'chart', 'mark', 'table', 'taskCounter'],
      events: {
        change: this.onChangeHandler,
      },
    });
    this.id = this.props.docId;
    this.editor.setMarkdown(this.props.content);
  }

  componentDidUpdate() {
    if (this.id === this.props.docId) return;
    this.id = this.props.docId;
    this.editor.setMarkdown(this.props.content);
  }

  onChangeHandler = () => {
    this.props.onChangeHandler('content', this.editor.getValue());
  }

  render() {
    return (<div
      id="editSection"
      className="docContent"
    />);
  }
}

TuiEditor.propTypes = {
  docId: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default TuiEditor;
